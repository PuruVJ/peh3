<script lang="ts">
</script>

<section class="container">
  <h3><slot name="title" /></h3>
  <p><slot name="content" /></p>
</section>

<style lang="scss">
  .container {
    border-radius: 16px;

    background-color: var(--app-color-dark);

    padding: 1rem;

    * {
      color: var(--app-color-dark-contrast);
    }
  }
</style>
