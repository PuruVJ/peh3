<script lang="ts">
  import { language } from '$lib/stores/i18n.store';
  import type { Language } from '$lib/stores/i18n.store';
  import { onMount } from 'svelte';

  // List of themes
  const languages: Language[] = ['en', 'hi'];

  function nextLanguage() {
    $language = $language === 'hi' ? 'en' : 'hi';
  }

  onMount(() => {
    // Initialize with localstorage
    const localLang = localStorage.getItem('lang') as Language;
    const userLangIsHindi = navigator.language === 'hi';

    $language = localLang || (userLangIsHindi ? 'hi' : 'en');
  });

  $: console.log($language);
</script>

<svelte:window lang={$language} />

<button on:click={nextLanguage}>
  {#if $language === 'hi'}
    A
  {:else}
    अ
  {/if}
</button>

<style lang="scss">
  button {
    width: 2.3rem;
    height: 2.3rem;

    font-size: 1.3rem;

    fill: var(--app-color-dark);

    border-radius: 50%;
  }

  button:hover {
    background-color: hsla(var(--app-color-dark-hsl), 0.2);
  }
</style>
