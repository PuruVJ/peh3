<script lang="ts">
  import { browser } from '$app/env';
  import { i18n } from '$lib/stores/i18n.store';
  import ServiceBox from './ServiceBox.svelte';
  import ServiceDialog from './ServiceDialog.svelte';

  let serviceInfoOpened: string | null = null;

  let closeDialogButtonEl: HTMLButtonElement;

  function openServiceInfo(serviceID: string) {
    serviceInfoOpened = serviceID;
  }

  $: serviceInfoOpened !== null && closeDialogButtonEl?.focus();

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

<section class="container">
  <h2>{$i18n.servicesHeading}</h2>
  <div class="center-box">
    {#each Object.keys($i18n.services) as key}
      <ServiceBox>
        <span slot="title">{$i18n.services[key].title}</span>
        <article slot="content">
          <p class="description">
            {$i18n.services[key].description}
          </p>
          <button class="open-service" on:click={() => openServiceInfo(key)}>
            {$i18n.servicesReadMoreButton}
          </button>
        </article>
      </ServiceBox>
    {/each}
  </div>
</section>

{#if serviceInfoOpened}
  <ServiceDialog bind:serviceInfoOpened />
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

  .open-service {
    width: 100%;

    display: flex;

    margin: 0.5rem 0;

    font-size: 1.2rem;
    text-decoration: underline dotted;
  }
</style>
