<script lang="ts">
  import { theme } from '$lib/stores/theme.store';
  import SunIcon from '~icons/ic/sharp-wb-sunny';
  import { onMount } from 'svelte';
  import Icon from './Icon.svelte';
  import MoonIcon from '~icons/majesticons/moon';

  // List of themes
  const themes: ('morning' | 'night')[] = ['morning', 'night'];
  let currentThemeIndex = 0;

  function nextTheme() {
    const { length } = themes;

    currentThemeIndex = (currentThemeIndex + 1) % length;
  }

  onMount(() => {
    // Initialize with localstorage
    const localTheme = localStorage.getItem('theme');
    const browserPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    currentThemeIndex = !localTheme
      ? browserPrefersDark
        ? 1
        : 0
      : themes.indexOf(localTheme as any);
  });

  $: $theme = themes[currentThemeIndex];
</script>

<svelte:head>
  <meta name="theme-color" content={['white', '#23252c'][currentThemeIndex]} />
</svelte:head>

<button aria-label={themes[currentThemeIndex]} on:click={nextTheme}>
  {#if currentThemeIndex === 0}
    <SunIcon />
  {:else}
    <MoonIcon />
  {/if}
</button>

<style>
  button {
    width: 2.3rem;
    height: 2.3rem;

    font-size: 1.2rem;

    border-radius: 50%;

    cursor: pointer;
  }

  button:hover {
    background-color: hsla(var(--app-color-dark-hsl), 0.2);
  }
</style>
