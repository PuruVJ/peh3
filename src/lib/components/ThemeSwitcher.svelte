<script lang="ts">
  import { theme } from '$lib/stores/theme.store';
  import { mdiWhiteBalanceSunny } from '@mdi/js';
  import { onMount } from 'svelte';
  import Icon from './Icon.svelte';
  import MoonSvg from './svg/MoonSVG.svelte';

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
    <Icon path={mdiWhiteBalanceSunny} />
  {:else}
    <MoonSvg />
  {/if}
</button>

<style>
  button {
    width: 2.3rem;
    height: 2.3rem;

    fill: var(--app-color-dark);

    border-radius: 50%;

    cursor: pointer;
  }

  button:hover {
    background-color: hsla(var(--app-color-dark-hsl), 0.2);
  }
</style>
