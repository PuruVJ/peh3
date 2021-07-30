<script lang="ts" context="module">
  import CtaButton from '$lib/components/CTAButton.svelte';
  import Services from '$lib/components/services/Services.svelte';
  import type { Language } from '$lib/stores/i18n.store';
  import { i18n, language } from '$lib/stores/i18n.store';
  import type { Load } from '@sveltejs/kit';

  export const load: Load = ({ page: { params } }) => {
    if (!['en', 'hi'].includes(params.lang)) return { redirect: '/en', status: 301 };

    return { props: { lang: params.lang } };
  };
</script>

<script lang="ts">
  export let lang: Language;

  $: $language = lang;
</script>

<svelte:head>
  <title>Puru Eye Hospital</title>
</svelte:head>

<main>
  <section class="top-area" class:hindi={lang === 'hi'}>
    <h1>{$i18n.puruEyeHospital}</h1>
    <h2>{$i18n.phacoSurgeryCenter}</h2>
    <br />
    <CtaButton />
  </section>

  <br />

  <Services />

  <br />
  <br />
  <hr />
  <br />
  <br />

  <section class="about-hospital">
    <h2>About Hospital</h2>
    <br />
    <div class="photo-desc">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <div class="photo">
        <img src="/gallery/cover-banner.jpg" alt="Dr Sandeep Vijay photo" />
      </div>
      <p class="description">
        <strong>Puru Eye Hospital, Lasik Laser & Phaco Surgery Centre</strong> is a well recognized
        name in eye care services in Jaipur. This is owned by <b>Dr Sandeep Vijay (M.S.)</b> who has
        more than 28 years of experience in advance eye care. The out patient department of each one
        is well equipped with latest state of the art equipments. Operation theatre of Puru Eye Hospital
        at Mansarovar is well equipped with latest phaco emulsification machine, operating microscope
        along with all necessary equipments.
      </p>
    </div>
  </section>

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
      <div class="photo">
        <img src="/doctor-photo.png" alt="Dr Sandeep Vijay photo" />
      </div>
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

    margin-top: 4rem;
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

  .about-hospital {
    .photo-desc {
      display: flex;
      flex-direction: row-reverse;
      gap: 2rem;

      & > * {
        flex: 1;
      }

      .photo {
        display: flex;
        justify-content: flex-end;

        img {
          max-width: 80%;
          height: auto;

          border-radius: 1rem;
        }
      }

      .description {
        font-size: 1.414rem;
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

    .about-hospital {
      .photo-desc {
        flex-direction: column;

        .photo {
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
</style>
