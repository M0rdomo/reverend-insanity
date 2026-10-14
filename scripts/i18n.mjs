import english from './messages-en.mjs';
export function systemLanguage(){
 try{return globalThis.game?.settings?.get('reverend-insanity','worldLanguage')==='en'?'en':'pt-BR';}
 catch{return 'pt-BR';}
}
/** Translate only a developer-supplied static message. Never pass document contents here. */
export function t(message){return systemLanguage()==='en'?(english[message]??message):message;}
/** Interpolate original values after translation, preserving names, HTML and internal identifiers. */
export function tt(strings,...values){
 const key=strings.map((part,i)=>part+(i<values.length?`{${i}}`:'' )).join('');
 return t(key).replace(/\{(\d+)\}/g,(match,index)=>Number(index)<values.length?String(values[Number(index)]):match);
}
export function contentPack(name){return `reverend-insanity.${name}${systemLanguage()==='en'?'-en':''}`;}
