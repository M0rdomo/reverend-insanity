import {t} from './i18n.mjs';
import {combatDisplay} from './integrations.mjs';
import {identityFromItems} from './identity.mjs';
import {ATTRIBUTES,SKILLS,capacity} from './rules.mjs';
const f=foundry.data.fields;
const text=(initial='')=>new f.StringField({initial:()=>t(initial),required:true,nullable:false});
const num=(initial=0,min=0,max)=>new f.NumberField({initial,required:true,nullable:false,min,...(max===undefined?{}:{max}),...([3,5].includes(max)?{integer:true}:{})});
const bool=(initial=false)=>new f.BooleanField({initial});
const schema=o=>new f.SchemaField(o);
function aperture(){return schema({rank:num(1,1,5),stage:text('inicial'),aptitude:text('D'),value:num(6),permanent:num(0,-100),reduction:num(),unstable:bool(),fissured:bool(),condition:text('Intacta'),hours:num(),revision:num(),retry:bool(),vital:text(),manual:text(),notes:text()});}
export class CharacterData extends foundry.abstract.TypeDataModel {
 static migrateData(source){
  super.migrateData(source);
  if(source.wallet && source.wallet.halfStones===undefined){const old=Number(source.wallet.stones??0);source.wallet.halfStones=Math.round((old-Math.floor(old))*2);source.wallet.stones=Math.floor(old);}
  return source;
 }
 static defineSchema(){return {attributes:schema(Object.fromEntries(Object.keys(ATTRIBUTES).map(k=>[k,num(1,1,5)]))),skills:schema(Object.fromEntries(Object.keys(SKILLS).map(k=>[k,num(0,0,5)]))),trades:new f.ArrayField(schema({id:text(),name:text('Novo ofício'),value:num(0,0,5)})),life:schema({value:num(5),bonus:num(0,-100)}),profile:schema(Object.fromEntries(['race','player','age','origin','region','clan','position','appearance','history','ambition','bonds','dao','attainment','languages','notes'].map(k=>[k,text()]))),apertures:schema({primary:aperture(),secondary:aperture()}),secondAperture:bool(),lineageId:text(),activeAperture:text('primary'),wallet:schema({stones:new f.NumberField({initial:3,min:0,integer:true,required:true,nullable:false}),halfStones:new f.NumberField({initial:0,min:0,integer:true,required:true,nullable:false}),debts:text()}),pd:num(),survival:num(0,0,3),situation:num(0,-100,100),craftNotes:text(),inventoryNotes:text(),organization:text(),faction:schema(Object.fromEntries(['kind','leader','headquarters','territory','members','allies','rivals','assets','influence','goals'].map(k=>[k,text()]))),source:text(),beast:schema({level:num(1,1,5),damage:num(1),habitat:text(),behavior:text(),trait:text()})};}
}
export class ReverendItemData extends foundry.abstract.TypeDataModel {
 static defineSchema(){return {attainment:text('Ordinário'),discovery:text(),description:new f.HTMLField({initial:''}),source:text(),referenceId:text(),rank:num(1,1,5),dao:text(),rarity:text('Comum'),quantity:num(1),price:num(),unit:text('unidade'),equipped:bool(),vital:bool(),controlled:bool(true),food:text(),missedMeals:num(0,0,3),cost:num(),costMode:text('common'),attribute:text('vontade'),skill:text('controle'),difficulty:num(),opposed:bool(),use:text(),range:text(),duration:text(),damage:num(),parameters:text(),notes:text(),recipe:new f.ObjectField({initial:{}}),hours:num(),transition:text(),conditionId:text()};}
}
export class ReverendActor extends Actor {
 prepareDerivedData(){super.prepareDerivedData(); const s=this.system;if(!s.life)return;if(this.type==='character'){const identity=identityFromItems(Array.from(this.items),s.lineageId);const legacy=this.getFlag('reverend-insanity','identity120')?{}:this._source.system.profile||{};s.profile.race=identity.race||legacy.race||'';s.profile.dao=identity.dao||legacy.dao||'';}const raw=this._source.system; s.life.max=Math.max(0,Number(raw.attributes?.corpo??1)+Number(raw.attributes?.alma??1)+3+Number(s.life.bonus));for(const a of Object.values(s.apertures))a.max=capacity(a);s.combatDisplay=combatDisplay(this.type,s);}
 async _preUpdate(changes,options,user){await super._preUpdate(changes,options,user);const merged=foundry.utils.mergeObject(this.toObject(),foundry.utils.expandObject(changes),{inplace:false});const s=merged.system;if(!s.life)return;const old=this._source.system; const oldMax=Math.max(0,Number(old.attributes.corpo)+Number(old.attributes.alma)+3+Number(old.life.bonus)); const max=Math.max(0,s.attributes.corpo+s.attributes.alma+3+s.life.bonus);const explicit=foundry.utils.hasProperty(foundry.utils.expandObject(changes),'system.life.value');changes['system.life.value']=Math.min(max,Math.max(0,explicit?s.life.value:s.life.value+max-oldMax)); for(const [key,a] of Object.entries(s.apertures))changes[`system.apertures.${key}.value`]=Math.min(a.value,capacity(a));if(!s.secondAperture)changes['system.activeAperture']='primary';}
}


