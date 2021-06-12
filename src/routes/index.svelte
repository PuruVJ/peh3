<script lang="ts">
  import CtaButton from '$lib/components/CTAButton.svelte';
  import Features from '$lib/components/Features.svelte';
  import { fadeIn, fadeOut } from '$lib/fade';
  import { i18n, language } from '$lib/stores/i18n.store';
</script>

<svelte:head>
  <title>Puru Eye Hospital</title>
</svelte:head>

<main in:fadeIn out:fadeOut>
  <section class="top-area" class:hindi={$language === 'hi'}>
    <h1>{$i18n.puruEyeHospital}</h1>
    <h2>{$i18n.phacoSurgeryCenter}</h2>
    <br />
    <CtaButton />
  </section>

  <br />

  <Features />

  <br />
  <br />
  <hr />
  <br />
  <br />

  <section class="about-doctor">
    <h2>About Doctor</h2>
    <br />
    <div class="photo-desc">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <div class="photo"><img src="/docor-photo.png" alt="Dr Sandeep Vijay photo" /></div>
      <p class="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quae libero quasi, minima
        recusandae architecto impedit laudantium eaque quo esse doloremque quam quaerat eos fugiat
        id itaque odio velit aliquam.
      </p>
    </div>
  </section>
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .top-area {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1,
    h2 {
      line-height: 1.1;
      font-weight: 500;
    }

    h1 {
      font-size: 5rem;
    }

    h2 {
      font-size: 2.618rem;
      color: hsla(var(--app-color-dark-hsl), 0.9);
    }

    &.hindi {
      h1,
      h2 {
        line-height: 1.4;
      }
    }
  }

  .about-doctor {
    .photo-desc {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;

      .photo {
        display: flex;

        img {
          max-width: 80%;

          border-radius: 50%;
          box-shadow: 0 0 0 0.75rem var(--app-color-dark);
        }
      }

      .description {
        font-size: 1.6rem;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .top-area {
      h1 {
        font-size: 2.6rem;
      }

      h2 {
        font-size: 1.6rem;
      }
    }

    .about-doctor {
      .photo-desc {
        grid-template-columns: 1fr;

        .photo {
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
</style>
