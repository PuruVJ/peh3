import { browser } from '$app/env';
import { writable } from 'svelte/store';

export type Theme = 'morning' | 'night';

const theme = writable<'morning' | 'night'>('morning', (set) => {
  // This is run in the very beginning, so no value here yet. Let's change that
  if (!browser) return;

  // Initialize with localstorage
  const localTheme = localStorage.getItem<Theme>('theme');
  const browserPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  set(localTheme || (browserPrefersDark ? 'night' : 'morning'));
});

export { theme };

let initialized = false;
theme.subscribe((val) => {
  if (!browser) return;

  // Don't do anything if its first value
  if (!initialized) return void (initialized = true);

  const bodyClass = document.body.classList;

  bodyClass.remove('morning', 'night');
  bodyClass.add(val);

  localStorage.setItem('theme', val);
});
