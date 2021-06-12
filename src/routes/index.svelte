<script lang="ts">
  import Features from '$lib/components/Features.svelte';
  import { fadeIn, fadeOut } from '$lib/fade';
</script>

<svelte:head>
  <title>Puru Eye Hospital</title>
</svelte:head>

<main in:fadeIn out:fadeOut>
  <section class="top-area">
    <h1>Puru Eye Hospital</h1>
    <h2>Phaco Surgery & Lasik center</h2>
    <button>Book an appointment</button>
  </section>

  <br /><br />

  <Features />

  <br />
  <hr />
  <br />

  <section class="about-doctor width-60">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <div><img src="/gallery/docor-photo.jpg" alt="Dr Sandeep Vijay photo" /></div>
    <p class="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quae libero quasi, minima
      recusandae architecto impedit laudantium eaque quo esse doloremque quam quaerat eos fugiat id
      itaque odio velit aliquam.
    </p>
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
      color: hsla(var(--app-color-dark-hsl), 0.9);
    }
  }

  .about-doctor {
    display: grid;
    grid-template-columns: 1fr 1fr;

    img {
      max-width: 70%;

      border-radius: 2rem;
    }

    .description {
      font-size: 2rem;
    }
  }
</style>
