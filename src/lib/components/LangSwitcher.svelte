<script lang="ts">
  import { goto } from '$app/navigation';
  import { language } from '$lib/stores/i18n.store';

  function switchLanguage() {
    const newVal = $language === 'en' ? 'hi' : 'en';

    goto(newVal, {
      noscroll: true,
      keepfocus: true,
    });

    document.documentElement.lang = newVal;
  }
</script>

<!-- अ -->

<button on:click={switchLanguage}>
  {$language === 'hi' ? 'A' : 'हिं'}
</button>

<style>
  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 2.3rem;
    height: 2.3rem;

    font-size: 1.4rem;
    text-align: center;
    text-decoration: none;
    color: var(--app-color-dark);

    border-radius: 50%;
  }

  button:hover {
    background-color: hsla(var(--app-color-dark-hsl), 0.2);
  }
</style>
