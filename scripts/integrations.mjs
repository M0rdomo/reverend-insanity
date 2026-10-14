import {t,tt} from './i18n.mjs';
/** Derived, read-only values for system-agnostic combat displays. */
export function combatDisplay(type, system) {
 if (type === 'organization') return {};
 const display = {life: {...system.life}};
 if (type === 'beast') return {...display, rank: system.beast.level};
 const key = system.secondAperture ? system.activeAperture : 'primary';
 const aperture = system.apertures[key] ?? system.apertures.primary;
 return {...display, essence: {value: aperture.value, max: aperture.max}, rank: aperture.rank};
}

/** Carousel's public init hook runs before it registers its world defaults. */
export function configureCarousel(config) {
 const defaults = config.defaultAttributesConfig;
 config.defaultAttributesConfig = function (...args) {
  return {...defaults.apply(this, args), 'reverend-insanity': [
   {attr:'combatDisplay.life.value',icon:'fas fa-heart',units:t('Vida')},
   {attr:'combatDisplay.essence.value',icon:'fas fa-yin-yang',units:t('Essência')},
   {attr:'combatDisplay.rank',icon:'fas fa-mountain',units:'Rank'}
  ]};
 };
}

// Native Roll.toMessage and Actor.getTokenDocument remain the integration points
// for Dice So Nice! and DFreds Droppables. Do not manually replay dice animations
// or override client graphics settings managed by Performance Optimizer.
