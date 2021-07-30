<script lang="ts">
  import { trapFocus } from '$lib/actions/trap-focus';
  import { fadeIn, fadeOut } from '$lib/fade';
  import { i18n } from '$lib/stores/i18n.store';

  export let serviceInfoOpened: string | null = null;

  function closeServiceInfo() {
    serviceInfoOpened = null;
  }
</script>

{#if serviceInfoOpened}
  <section in:fadeIn out:fadeOut class="container" on:click={closeServiceInfo}>
    <div
      tabindex={0}
      role="dialog"
      aria-labelledby="info-title"
      aria-describedby="info-description"
      class="info-dialog"
      use:trapFocus
      on:click|stopPropagation={() => {}}
    >
      <h1 id="info-title">{$i18n.services[serviceInfoOpened].title}</h1>
      <article>
        <p id="info-description">
          {$i18n.services[serviceInfoOpened].description}
        </p>
      </article>
      <!-- svelte-ignore a11y-autofocus -->
      <button autofocus class="close-dialog-button" on:click={closeServiceInfo}>
        {$i18n.close}
      </button>
    </div>
  </section>
{/if}

<style lang="scss">
  .container {
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

    background-color: hsla(var(--app-color-dark-hsl), 0.6);
  }

  .info-dialog {
    width: 45%;

    padding: 1rem 1.5rem;

    background-color: var(--app-color-light);

    border-radius: 1rem;

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
    .container {
      background-color: transparent;
      backdrop-filter: blur(40px);
    }

    .info-dialog {
      background-color: transparent;
    }
  }

  @media screen and (max-width: 1200px) {
    .container {
      align-items: flex-start;

      overflow-y: auto;
    }

    .info-dialog {
      width: 90%;
    }
  }
</style>
