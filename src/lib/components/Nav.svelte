<script lang="ts">
  import ThemeSwitcher from './ThemeSwitcher.svelte';
  import LangSwitcher from './LangSwitcher.svelte';
  import IntersectionObserver from 'svelte-intersection-observer';
  import { theme } from '$lib/stores/theme.store';

  let smigget: HTMLDivElement;
  let smiggetVisible = true;
</script>

<header class:shadow={!smiggetVisible} class:night={$theme === 'night'}>
  <div class="logo">
    <img src="/PEH-logo-final.png" alt="Puru Eye Hospital logo" />
  </div>
  <span class="spacer" />
  <span>
    <LangSwitcher />
    <ThemeSwitcher />
  </span>
</header>

<IntersectionObserver element={smigget} bind:intersecting={smiggetVisible}>
  <div bind:this={smigget} class="smigget" />
</IntersectionObserver>

<style lang="scss">
  .logo {
    display: flex;
    justify-items: center;
    align-items: center;

    img {
      max-height: 2.5rem;
    }
  }

  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;

    position: fixed;
    top: 0;
    z-index: 9;

    border-radius: 0 0 1rem 1rem;

    width: 61.8%;
    height: 3.2rem;

    padding: 0 0.6rem;

    background-color: var(--app-color-shell);

    &.shadow {
      box-shadow: 0 3.4px 6.3px rgba(0, 0, 0, 0.1), 0 27px 50px rgba(0, 0, 0, 0.1);
    }

    &.night.shadow {
      background-color: #2a2c2f;
    }
  }

  @media screen and (max-width: 1100px) {
    header {
      width: 95% !important;
    }
  }
</style>
