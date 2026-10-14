/** World-scoped choice; never changes Foundry's client language or other modules. */
export const LANGUAGE_SETTING = 'worldLanguage';
export const LANGUAGES = Object.freeze({'pt-BR':'Português (Brasil)', en:'English'});

export async function chooseInitialLanguage({settings, user, activeGM, choose}) {
 const saved = settings.get('reverend-insanity', LANGUAGE_SETTING);
 if (Object.hasOwn(LANGUAGES, saved)) return saved;
 if (!user?.isGM || activeGM?.id !== user.id) return null;
 const language = await choose();
 // Closing the dialog is not a choice. Ask again on the next GM entry.
 if (!Object.hasOwn(LANGUAGES, language)) return null;
 await settings.set('reverend-insanity', LANGUAGE_SETTING, language);
 return language;
}

export function registerWorldLanguage(settings) {
 settings.register('reverend-insanity', LANGUAGE_SETTING, {
  name:'Idioma do RPG / RPG language',
  hint:'Idioma das fichas e conteúdos do sistema neste mundo. / Language of this world’s system sheets and content.',
  scope:'world', config:true, type:String, default:'',
  choices:{'':'Escolher na primeira entrada / Choose on first entry',...LANGUAGES},
  requiresReload:true
 });
}

export function showLanguageChoice(DialogV2) {
 return DialogV2.wait({
  window:{title:'Reverend Insanity — Idioma / Language'},
  content:'<p>Escolha o idioma do RPG neste mundo. Você poderá alterá-lo nas configurações.</p><p>Choose the RPG language for this world. You can change it later in settings.</p>',
  buttons:[
   {action:'pt-BR',label:'Português (Brasil)',callback:()=> 'pt-BR'},
   {action:'en',label:'English',callback:()=> 'en'}
  ],
  rejectClose:false
 });
}
