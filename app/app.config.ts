export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'neutral',
    }
  },
  uiPro: {
    pageHero: {
      slots: {
        title: 'text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-(--ui-text-highlighted)',
        description: 'text-lg sm:text-xl/8 text-white',
      },
      class:'text-center'
    },
  }
})
