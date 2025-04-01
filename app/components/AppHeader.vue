<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <img
          alt="Company Logo"
          class="w-14 mr-4"
          :src="logo"
        >
      </NuxtLink>
    </template>

    <template #right>
      <UNavigationMenu
        :items="items"
        variant="link"
        class="hidden lg:block"
      />
      <UButton
        :to="ac.link.app"
        label="登陆"
        variant="subtle"
        class="hidden lg:block"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
      <UButton
        :to="ac.link.app"
        class="mt-4"
        label="登陆"
        variant="subtle"
        block
      />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import logo from '~/assets/images/logo.png'

const nuxtApp = useNuxtApp()
const ac = useAppConfig()
const route = useRoute()
const { updateHeadings } = useScrollspy()
const items = computed(() => [
  {
    label: '帮助中心',
    to: '/docs',
    active: route.path.startsWith('/docs')
  }, {
    label: '功能',
    to: '/#features',
    active: route.hash.startsWith('#features')
  }, {
    label: '价格',
    to: '/#pricing',
    active: route.hash.startsWith('#pricing')
  }, {
    label: '用户好评',
    to: '/#testimonials',
    active: route.hash.startsWith('#testimonials')
  }, {
    label: 'FAQ',
    to: '/#faq',
    active: route.hash.startsWith('#faq')
  }])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#features'),
    document.querySelector('#pricing'),
    document.querySelector('#testimonials'),
    document.querySelector('#faq')
  ].filter(Boolean) as Element[])
})
</script>
