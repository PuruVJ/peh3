<script>
  import { mdiPhone } from '@mdi/js';
  import Icon from './Icon.svelte';
</script>

<a href="tel:+919414065020">
  <span> <Icon fill="var(--app-color-dark-contrast)" path={mdiPhone} /></span>
  Book an appointment
</a>

<style lang="scss">
  a {
    display: flex;
    align-items: center;

    margin: 1rem;
    padding: 1rem;

    background-color: var(--app-color-dark);
    color: var(--app-color-dark-contrast);

    font-size: 1.6rem;

    text-decoration: none;

    &:hover {
      background-color: hsla(var(--app-color-dark-hsl), 0.85);
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 0.5rem;

    :global(svg) {
      width: 1.8rem;
      height: auto;
    }
  }

  @media screen and (max-width: 600px) {
    a {
      font-size: 1.2rem;
    }

    span :global(svg) {
      width: 1.4rem;
    }
  }
</style>
