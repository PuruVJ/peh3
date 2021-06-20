<script lang="ts" context="module">
  import type { Language } from '$lib/stores/i18n.store';
  import type { Load } from '@sveltejs/kit';

  export const load: Load = () => {
    let lang: Language = 'en';

    try {
      const localLang = localStorage.getItem('lang') as Language;
      const userLangIsHindi = navigator.language === 'hi';

      lang = localLang || (userLangIsHindi ? 'hi' : 'en');
    } catch {}

    return { redirect: `/${lang}`, status: 302 };
  };
</script>
