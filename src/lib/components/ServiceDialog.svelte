<script lang="ts">
  import { trapFocus } from '$lib/actions/trap-focus';
  import { fadeIn, fadeOut } from '$lib/fade';
  import { i18n } from '$lib/stores/i18n.store';

  export let serviceInfoOpened: string | null = null;

  let closeDialogButtonEl: HTMLButtonElement;

  function closeServiceInfo() {
    serviceInfoOpened = null;
  }

  $: serviceInfoOpened !== null && closeDialogButtonEl?.focus();
</script>

{#if serviceInfoOpened}
  <section in:fadeIn out:fadeOut class="info-dialog-overlay" on:click={closeServiceInfo}>
    <div
      role="dialog"
      aria-labelledby="info-title"
      aria-describedby="info-description"
      class="info-dialog"
      use:trapFocus
      on:click|stopPropagation={() => {}}
    >
      <h1 id="info-title">{$i18n.services[serviceInfoOpened].title}</h1>
      <p id="info-description">
        {$i18n.services[serviceInfoOpened].description}
      </p>
      <button
        class="close-dialog-button"
        bind:this={closeDialogButtonEl}
        on:click={closeServiceInfo}
      >
        Close
      </button>
    </div>
  </section>
{/if}

<style lang="scss">
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
    width: 40%;

    p {
      font-size: 1.3rem;
    }
  }

  .close-dialog-button {
    display: flex;
    align-items: center;

    margin: 2rem 0;
    padding: 0.5rem;

    width: 100%;

    background-color: var(--app-color-dark);
    color: var(--app-color-dark-contrast);

    font-size: 1.6rem;

    text-decoration: none;

    &:hover {
      background-color: hsla(var(--app-color-dark-hsl), 0.85);
    }
  }

  button:focus {
    box-shadow: var(--app-outline-shadow);
  }

  @supports (backdrop-filter: blur(10px)) {
    .info-dialog-overlay {
      background-color: transparent !important;
      backdrop-filter: blur(40px);
    }
  }

  @media screen and (max-width: 1200px) {
    .info-dialog-overlay {
      align-items: flex-start;

      overflow-y: auto;
    }

    .info-dialog {
      width: 90%;
    }
  }
</style>
