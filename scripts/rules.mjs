import {t,tt} from './i18n.mjs';
export const ATTRIBUTES = {corpo:'Corpo',alma:'Alma',mente:'Mente',vontade:'Vontade'};
export const SKILLS = {atletismo:'Atletismo',luta:'Luta',pontaria:'Pontaria',furtividade:'Furtividade',investigacao:'Investigação',sobrevivencia:'Sobrevivência',medicina:'Medicina',persuasao:'Persuasão',enganacao:'Enganação',comercio:'Comércio',refinamento:'Refinamento',manejo:'Manejo de recursos',controle:'Controle de essência'};
export const STAGES = {inicial:'Inicial',medio:'Médio',superior:'Superior',pico:'Pico'};
export const TYPES = {gu:'Gu',equipment:'Equipamento',material:'Material',recipe:'Receita',manual:'Manual de cultivo',technique:'Killer move',condition:'Estado',lineage:'Povo',dao:'Caminho de Dao'};
export const TABS = [{id:'profile',label:'Perfil',icon:'user'},{id:'attributes',label:'Atributos e perícias',icon:'dice-d10'},{id:'aperture',label:'Abertura',icon:'yin-yang'},{id:'equipment',label:'Equipamentos',icon:'shield-halved'},{id:'backpack',label:'Mochila',icon:'sack-dollar'},{id:'craft',label:'Alquimia/forja',icon:'flask'},{id:'effects',label:'Efeitos',icon:'wand-magic-sparkles'}];
export const CONDITIONS = [
 ['sangrando','Sangrando','Perde 1 de Vida ao fim de cada rodada até estancar.'],
 ['envenenado','Envenenado','Registre agente, Rank para purificação, frequência, duração e efeito.'],
 ['congelado','Congelado','A parte congelada não pode ser usada; congelamento integral imobiliza.'],
 ['queimado','Queimado','−1 dado em ações físicas afetadas; −2 em lesões extensas.'],
 ['chamas','Em chamas','1 de dano ao fim da rodada até apagar o fogo.'],
 ['cego','Cego','Sem informação visual. Ações exclusivamente visuais são impossíveis; outros meios podem sofrer até −2 dados.'],
 ['imobilizado','Imobilizado','Não muda de posição nem usa partes presas; outros meios continuam possíveis.'],
 ['dormindo','Dormindo','Não age conscientemente; registre a condição de despertar.'],
 ['desmaiado','Desmaiado','Inconsciente. Resolver a causa; Vida positiva não garante despertar.'],
 ['apavorado','Apavorado','−2 dados em ações que enfrentem diretamente a fonte do medo.'],
 ['encantado','Encantado','−2 dados para reconhecer ou contrariar a influência descrita. Não concede obediência absoluta.'],
 ['escravizado','Escravizado','Controle sobrenatural: registre controlador, comandos, resistência, manutenção e ruptura.'],
 ['incapacitado','Incapacitado','Não realiza esforço. Se causado somente por Vida zero, cessa ao recuperar Vida.'],
 ['agonizando','Agonizando','Vontade D 0 ao fim da rodada. Zero sucessos marca falha; três falhas causam morte.'],
 ['morto','Morto','Cura comum não reverte a morte.']
];
const baseLabels=[ATTRIBUTES,SKILLS,STAGES,TYPES].map(x=>({...x}));
const baseTabs=TABS.map(x=>({...x})),baseConditions=CONDITIONS.map(x=>[...x]);
export function refreshRuleLabels(){
 for(const [index,labels] of [ATTRIBUTES,SKILLS,STAGES,TYPES].entries())for(const key of Object.keys(labels))labels[key]=t(baseLabels[index][key]);
 for(const [index,tab] of TABS.entries())tab.label=t(baseTabs[index].label);
 for(const [index,condition] of CONDITIONS.entries()){condition[1]=t(baseConditions[index][1]);condition[2]=t(baseConditions[index][2]);}
}
export const clamp=(v,min,max)=>Math.min(max,Math.max(min,Number(v)||0));
export function absorbStones(stones,halfStones,points){
 if(![stones,halfStones,points].every(n=>Number.isInteger(n)&&n>=0))throw new Error(t('Use quantidades inteiras de pedras e pontos.'));
 if(points>stones*2+halfStones)throw new Error(t('Pedras insuficientes.'));
 let common=0;
 for(let n=0;n<points;n++){if(halfStones){halfStones--;common++;}else{stones--;halfStones++;}}
 return {stones,halfStones,common};
}
export function capacity(a) {const n={D:0,C:1,B:2,A:3}[a.aptitude]??0;return Math.max(0,6+2*n+(clamp(a.rank,1,5)-1)*n+Number(a.permanent||0)-Number(a.reduction||0)-(a.fissured?2:0));}
export function pool(attribute,skill,situation=0){return Math.max(1,Math.floor(Number(attribute)+Number(skill)+clamp(situation,-2,2)));}
export function result(successes,difficulty,opposed=false){if(successes===0)return t('Falha'); if(successes<difficulty)return t('Falha');if(successes===difficulty)return opposed?t('Empate — defesa favorecida'):t('Impasse');return successes>=difficulty+2?t('Sucesso excepcional'):t('Sucesso');}
export function guCost(cost,rank,apertureRank,mode='common'){return mode==='common'?Math.max(1,Number(cost)-(apertureRank>rank?1:0)):Math.max(0,Number(cost));}
export function advancement(a){const nextRank=a.stage==='pico';return {hours:({inicial:28,medio:56,superior:84,pico:112})[a.stage],difficulty:nextRank?(a.rank===4?3:2):(a.rank>=4?2:1),cost:Math.ceil(capacity(a)/2),nextRank:nextRank?a.rank+1:a.rank,nextStage:nextRank?'inicial':({inicial:'medio',medio:'superior',superior:'pico'})[a.stage]};}
