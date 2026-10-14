/** Populate every world's atlas once. Existing and intentionally deleted scenes stay intact. */
export async function initializeWorldAtlas({settings,scenes,pack,createScene}){
 if(settings.get('reverend-insanity','atlasInitialized'))return;
 const documents=await pack.getDocuments();
 for(const document of documents){
  const key=document.getFlag('reverend-insanity','atlasScene');
  if(!key||scenes.some(scene=>scene.getFlag('reverend-insanity','atlasScene')===key))continue;
  const data=document.toObject();delete data._id;data.active=false;
  await createScene(data);
 }
 await settings.set('reverend-insanity','atlasInitialized',true);
}
