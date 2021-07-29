<script lang="ts">
  import { i18n } from '$lib/stores/i18n.store';
  import { fadeIn, fadeOut } from '$lib/fade';
  import ServiceBox from './ServiceBox.svelte';
  import { browser } from '$app/env';

  let serviceInfoOpened: string | null = null;

  $: {
    if (browser) {
      const classList = document.body.classList;

      if (serviceInfoOpened === null) {
        classList.remove('noscroll');
      } else {
        classList.add('noscroll');
      }
    }
  }
</script>

<svelte:body class:noscroll={serviceInfoOpened} />

<section class="container">
  <h2>{$i18n.servicesHeading}</h2>
  <div class="center-box">
    {#each Object.entries($i18n.services) as [key, val] (val)}
      <ServiceBox>
        <span slot="title">{$i18n.services[key].title}</span>
        <span slot="content">
          <div class="description">
            {$i18n.services[key].description}
          </div>
          <button on:click={() => (serviceInfoOpened = key)}>Open</button>
        </span>
      </ServiceBox>
    {/each}
  </div>
</section>

{#if serviceInfoOpened}
  <section in:fadeIn out:fadeOut class="info-dialog-overlay">
    <div class="info-dialog">
      <h1>{$i18n.services[serviceInfoOpened].title}</h1>
      <p>
        {$i18n.services[serviceInfoOpened].description}
      </p>
      <button on:click={() => (serviceInfoOpened = null)}>Close</button>
    </div>
  </section>
{/if}

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      width: 100%;
    }
  }

  .center-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap: 1.5rem;
  }

  .description {
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .info-dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100%;

    overflow: hidden;

    background-color: rgba(0, 0, 0, 0.3);
  }

  .info-dialog {
    width: clamp(10rem, 40vw, 100%);

    p {
      font-size: 1.2rem;
    }
  }

  @supports (backdrop-filter: blur(10px)) {
    .info-dialog-overlay {
      background-color: transparent !important;

      backdrop-filter: blur(40px);
    }
  }
</style>
