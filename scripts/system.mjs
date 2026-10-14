import {registerWorldLanguage,chooseInitialLanguage,showLanguageChoice} from './world-language.mjs';
import {t,tt,contentPack} from './i18n.mjs';
import {configureCarousel} from './integrations.mjs';
Hooks.once('combat-tracker-dock-init', configureCarousel);
import {initializeWorldAtlas} from './world-defaults.mjs';
import {migrateIdentity} from './identity.mjs';
import {CharacterData,ReverendItemData,ReverendActor} from './models.mjs';
import {ReverendSheet,ReverendItemSheet,rollTest} from './sheets.mjs';
import {TYPES,CONDITIONS,refreshRuleLabels} from './rules.mjs';

Hooks.once('init',()=>{
 registerWorldLanguage(game.settings);
 refreshRuleLabels();
 game.settings.register('reverend-insanity','atlasInitialized',{scope:'world',config:false,type:Boolean,default:false});
 game.settings.register('reverend-insanity','content110',{scope:'world',config:false,type:Boolean,default:false});
 CONFIG.Actor.documentClass=ReverendActor;
 for(const type of ['character','beast','organization'])CONFIG.Actor.dataModels[type]=CharacterData;
 for(const type of Object.keys(TYPES))CONFIG.Item.dataModels[type]=ReverendItemData;
 CONFIG.Actor.typeLabels={character:t('Personagem'),beast:t('Criatura'),organization:t('Organização')};
 CONFIG.Item.typeLabels=TYPES;
 CONFIG.Actor.trackableAttributes={character:{bar:['life','apertures.primary','apertures.secondary'],value:['survival','wallet.stones','wallet.halfStones']},beast:{bar:['life'],value:['beast.level','beast.damage']},organization:{bar:[],value:['wallet.stones','wallet.halfStones']}};
 CONFIG.Combat.initiative={formula:'@attributes.corpo * 100 + @attributes.mente * 10 + 1d10 / 10',decimals:1};
 CONFIG.time.roundTime=6;
 CONFIG.statusEffects=CONDITIONS.map(([id,name,description])=>({id,name,img:'systems/reverend-insanity/assets/condition.svg',description:`<p>${description}</p>`}));
 foundry.applications.apps.DocumentSheetConfig.registerSheet(Actor,'reverend-insanity',ReverendSheet,{types:['character','beast','organization'],makeDefault:true,label:t('Reverend Insanity — Ficha em abas')});
 foundry.applications.apps.DocumentSheetConfig.registerSheet(Item,'reverend-insanity',ReverendItemSheet,{types:Object.keys(TYPES),makeDefault:true,label:'Reverend Insanity — Item'});
 game.reverend={rollTest};
});

Hooks.on('preCreateActor',(actor,data)=>{
 if(actor.type==='character'&&!data.img)actor.updateSource({img:'systems/reverend-insanity/assets/character.svg'});
 if(!data.prototypeToken)actor.updateSource({prototypeToken:{actorLink:actor.type!=='beast',bar1:{attribute:actor.type==='organization'?null:'life'},bar2:{attribute:actor.type==='character'?'apertures.primary':null},displayBars:CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER}});
});

Hooks.once('ready',async()=>{
 console.info('Reverend Insanity RPG | 1.4.0 ready.');
 if(!game.user.isGM||game.users.activeGM?.id!==game.user.id)return;
 try{
  const language=await chooseInitialLanguage({settings:game.settings,user:game.user,activeGM:game.users.activeGM,choose:()=>showLanguageChoice(foundry.applications.api.DialogV2)});
  if(!language)return;
  refreshRuleLabels();
  CONFIG.Actor.typeLabels={character:t('Personagem'),beast:t('Criatura'),organization:t('Organização')};
  CONFIG.statusEffects=CONDITIONS.map(([id,name,description])=>({id,name,img:'systems/reverend-insanity/assets/condition.svg',description:`<p>${description}</p>`}));
  if(game.world.id==='reverend-insanity'){
   const sources=await (await fetch('systems/reverend-insanity/assets/scenes.json')).json();
   for(const data of sources){
    const scene=game.scenes.find(s=>s.getFlag('reverend-insanity','atlasScene')===data.flags['reverend-insanity'].atlasScene);
    if(scene?.levels.size && !scene.firstLevel.background.src)await scene.updateEmbeddedDocuments('Level',[{_id:scene.firstLevel.id,'background.src':data.levels[0].background.src}]);
   }
  }
  await initializeWorldAtlas({settings:game.settings,scenes:game.scenes,pack:game.packs.get(contentPack('cenas')),createScene:data=>Scene.create(data)});
  for(const actor of game.actors)await migrateIdentity(actor);
  if(game.settings.get('reverend-insanity','content110'))return;
  const portraits=await (await fetch('systems/reverend-insanity/assets/beast-portraits.json')).json();
  for(const actor of game.actors){
   const patch={};
   if(actor.type==='character'||actor.type==='organization'){patch['system.wallet.stones']=actor.system.wallet.stones;patch['system.wallet.halfStones']=actor.system.wallet.halfStones;}
   if(actor.type==='beast'&&portraits[actor.name]&&(!actor.img||actor.img==='icons/svg/mystery-man.svg'||actor.img.endsWith('/beast.svg'))){patch.img=portraits[actor.name];patch['prototypeToken.texture.src']=portraits[actor.name];}
   if(Object.keys(patch).length)await actor.update(patch);
  }
  await game.settings.set('reverend-insanity','content110',true);
  ui.notifications.info(t('Fichas, pedras e cenas atualizadas.'));
 }catch(error){console.error('Reverend Insanity | Atualização 1.1.0',error);ui.notifications.error(t('Não foi possível concluir a atualização dos conteúdos. Confira o console.'));}
});

Hooks.on("createActor",async(actor,options,userId)=>{if(game.user.id===userId)await migrateIdentity(actor);});

