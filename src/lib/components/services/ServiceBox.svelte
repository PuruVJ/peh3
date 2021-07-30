<script lang="ts">
</script>

<section class="container">
  <h3><slot name="title" /></h3>
  <p><slot name="content" /></p>
</section>

<style lang="scss">
  .container {
    border-radius: 16px;

    background-color: hsla(var(--app-color-dark-hsl), 0.1);

    padding: 1rem;

    h3 {
      font-weight: 500;
      line-height: 1.618;
    }

    * {
      color: var(--app-color-dark);
    }
  }
</style>
