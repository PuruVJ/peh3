<script>
  import { i18n } from '$lib/stores/i18n.store';
  import ServiceBox from './ServiceBox.svelte';
</script>

<section class="container">
  <h2>{$i18n.servicesHeading}</h2>
  <div class="center-box">
    {#each Object.entries($i18n.services) as [key, val] (val.title)}
      <ServiceBox>
        <span slot="title">{$i18n.services[key].title}</span>
        <span slot="content">
          {$i18n.services[key].description}
        </span>
      </ServiceBox>
    {/each}
  </div>
</section>

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

  span[slot='content'] {
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
