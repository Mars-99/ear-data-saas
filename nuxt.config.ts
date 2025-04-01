// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image'
  ],
  devtools: {
    enabled: false
  },
  css: ['~/assets/css/main.css'],
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
      gitInfo: {
        name: 'Mars-99',
        owner: 'main',
        url: 'https://github.com/Mars-99/ear-data-saas.git'
      }
    }
  },
  appConfig: {
    link: {
      app: 'https://app.ear-data.com/'
    }
  },
  routeRules: {
    '/': { prerender: true },
    '/docs': { redirect: '/docs/quick-start', prerender: false }
  },
  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
