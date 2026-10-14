export const lineageBonuses={
 'Humanos':'choice','Homens peludos':'skills.refinamento','Homens de pedra':'attributes.corpo',
 'Homens alados':'skills.atletismo','Homens da neve':'skills.sobrevivencia','Minimen':'skills.manejo',
 'Povo do mar':'trade:canto','Homens fera':'attributes.corpo','Homens de tinta':'skills.investigacao',
 'Homens cogumelo':'skills.medicina','Homens ovo':'attributes.vontade','Homens dragão':'skills.controle'
};
export const daoName=item=>item.system.dao||item.name.replace(/^Dao:\s*/i,'');
export function identityFromItems(items,lineageId=''){
 const peoples=items.filter(i=>i.type==='lineage'),lineage=peoples.find(i=>(i.id||i._id)===lineageId)||peoples[0];
 return {lineage,race:lineage?.name||'',dao:items.filter(i=>i.type==='dao').map(daoName).join(' · ')};
}
const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
const aliases={'homem de pedra':'homens de pedra','homem peludo':'homens peludos','humano':'humanos','homem da neve':'homens da neve','homem de tinta':'homens de tinta','homem alado':'homens alados','homem fera':'homens fera','homem cogumelo':'homens cogumelo','homem ovo':'homens ovo','homem dragao':'homens dragao'};
export function matchIdentity(entries,type,name){const key=norm(name).replace(/^dao:\s*/,'');return entries.find(i=>i.type===type&&(norm(type==='dao'?daoName(i):i.name)===(aliases[key]||key)));}
export async function migrateIdentity(actor){
 if(actor.type!=='character'||actor.getFlag('reverend-insanity','identity120'))return;
 const legacy=actor._source.system.profile||{},documents=await game.packs.get('reverend-insanity.povos').getDocuments();
 for(const [type,value] of [['lineage',legacy.race],['dao',legacy.dao]]){
  if(actor.items.some(i=>i.type===type)||!value)continue;
  const match=matchIdentity(documents,type,value);
  const data=match?match.toObject():{name:type==='dao'?'Dao: '+value:value,type,img:`systems/reverend-insanity/assets/${type}.svg`,system:{description:'<p>Registro preservado da ficha anterior.</p>',...(type==='dao'?{dao:value}:{})}};
  delete data._id;
  if(type==='dao')data.system.attainment=legacy.attainment||'Ordinário';
  if(type==='lineage'){data.flags??={};data.flags['reverend-insanity']??={};data.flags['reverend-insanity'].bonusStatus='legacy';}
  await actor.createEmbeddedDocuments('Item',[data]);
 }
 // Preserve existing scores; an old sheet may already include its creation bonus.
 for(const item of actor.items.filter(i=>i.type==='lineage'))if(!item.getFlag('reverend-insanity','bonusStatus'))await item.setFlag('reverend-insanity','bonusStatus','legacy');
 await actor.setFlag('reverend-insanity','identity120',true);
}
