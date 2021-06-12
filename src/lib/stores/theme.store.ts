import { browser } from '$app/env';
import { writable } from 'svelte/store';

const theme = writable<'morning' | 'night'>('morning');

export { theme };

let initVal = '';
theme.subscribe((val) => {
  if (!browser) return;

  // Don't do anything if its first value
  if (!initVal) {
    initVal = val;
    return;
  }

  const body = document.body;

  body.classList.remove('morning', 'night');
  body.classList.add(val);

  localStorage.setItem('theme', val);

  initVal = val;
});
