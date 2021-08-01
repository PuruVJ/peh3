<script lang="ts">
  import { browser } from '$app/env';
  import { fadeIn, fadeOut } from '$lib/fade';
  import { onMount } from 'svelte';

  const imagesList = ['1', '2', '3', '4', '5', '6', '7'];

  let currentImage: string = imagesList[0];
  let currentImagePromise: Promise<void>;

  function loadImage(imgPath: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const image = new Image();

      image.src = imgPath;

      image.onload = () => resolve();
      image.onerror = reject;
    });
  }

  $: if (browser) currentImagePromise = loadImage(`/gallery/${currentImage}.jpg`);

  onMount(() => {
    const interval = setInterval(() => {
      currentImage = imagesList[(imagesList.indexOf(currentImage) + 1) % imagesList.length];
    }, 6000);

    return () => clearInterval(interval);
  });
</script>

<section class="gallery">
  <div class="stage">
    {#await currentImagePromise then _}
      <figure in:fadeIn={{ delay: 800, duration: 500 }} out:fadeOut={{ duration: 500 }}>
        <img src="/gallery/optimized/{currentImage}-large.jpg" alt="Gallery" />
      </figure>
    {/await}
  </div>

  <!-- Here go the thumbnails -->
  <div class="thumbnail-area">
    {#each imagesList as image}
      <figure>
        <img
          class:selected={currentImage === image}
          src="/gallery/optimized/{image}-small.jpg"
          alt="Gallery item thumbnail"
        />
      </figure>
    {/each}
  </div>
</section>

<style lang="scss">
  .gallery {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;

    max-width: 100%;
    width: 100%;
  }

  img {
    border-radius: 0.5rem;
  }

  .stage {
    position: relative;

    border-radius: 0.5rem;

    padding-top: 56.25%;

    background-color: hsl(0, 0%, 11%);

    figure {
      position: absolute;
      left: 0;
      top: 0;

      height: 100%;
      width: 100%;
    }

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }

  .thumbnail-area {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    width: 18rem;

    figure {
      width: 100%;
      height: 100%;
    }

    img {
      object-fit: cover;

      width: 100%;
      height: 100%;
      max-height: 6.3rem;
    }
  }
</style>
