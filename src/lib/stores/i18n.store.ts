import { browser } from '$app/env';
import { translations } from '$lib/translations';
import { derived, writable } from 'svelte/store';

export type Language = 'hi' | 'en';

export const language = writable<Language>('en');

//

export const i18n = derived(language, ($lang) => translations[$lang]);

let initialized = false;
language.subscribe(($lang) => {
  if (!browser) return;
  if (!initialized) return void (initialized = true);

  localStorage.setItem('lang', $lang);
});
