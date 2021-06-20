<script lang="ts">
  import { language } from '$lib/stores/i18n.store';
</script>

<svelte:window lang={$language} />

<a href="/{$language === 'en' ? 'hi' : 'en'}">
  {#if $language === 'hi'}
    A
  {:else}
    अ
  {/if}
</a>

<style lang="scss">
  a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 2.3rem;
    height: 2.3rem;

    font-size: 1.4rem;
    text-align: center;
    text-decoration: none;
    color: var(--app-color-dark);

    border-radius: 50%;
  }

  a:hover {
    background-color: hsla(var(--app-color-dark-hsl), 0.2);
  }
</style>
