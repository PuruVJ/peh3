import { browser } from '$app/env';
import { writable } from 'svelte/store';

const theme = writable<'morning' | 'night'>('morning');

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
