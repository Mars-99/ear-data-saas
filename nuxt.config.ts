// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@nuxthq/studio'
  ],
  devtools: {
    enabled: false
  },
  css: ['~/assets/css/main.css'],
  appConfig: {
    link: {
      app: 'https://app.ear-data.com/'
    }
  },

  routeRules: {
    '/docs': { redirect: '/docs/quick-start', prerender: false }
  },
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
      gitInfo: {
        name: 'content',
        owner: 'nuxt',
        url: 'https://github.com/Mars-99/ear-data-saas.git'
      }
    },
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
