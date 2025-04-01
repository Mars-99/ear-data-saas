<template>
  <UPage
    v-if="page"
    class="relative"
  >
    <UPageHero
      class="page-hero-bg"
      :title="page.hero.title"
      :description="page.hero.description"
      orientation="horizontal"
      :links="page.hero.links"
    >
      <template #title>
        <MDC
          :value="page.hero.title"
          class="*:leading-11 sm:*:leading-19 max-w-3xl mx-auto"
        />
      </template>
      <img :src="heroImages" class="hidden lg:block  left-0 w-full max-w-xl"/>
    </UPageHero>
    <UNavigationMenu
      v-if="pageCont.isFixed"
      :items="featureLinks"
      variant="link"
      orientation="vertical"
      class="fixed right-2 top-[40%] text-right z-100 text-right hidden 2xl:block"
    />
    <UPageSection
      id="features"
      :title="page.features.title"
      :description="page.features.description"
      :ui="{ features: 'sm:grid-cols-1 lg:grid-cols-1' }"
      class="relative overflow-hidden"
    >
      <template #features>
        <div :id="`featuresId${index+1}`" class="w-full text-center" v-for="(item, index) in page.features.items">
          <h2 class="text-xl !text-green-600">{{item.title}}</h2>
          <p>{{item.description}}</p>
          <div class="w-full bg-gray-100 rounded-xl p-4 my-4">
            <video width="100%" controls autoplay loop muted>
              <source :src="pageCont.videos[index]" type="video/mp4">
            </video>
          </div>

        </div>
      </template>
    </UPageSection>


    <UPageSection
      id="faq"
      :title="page.faq.title"
      :description="page.faq.description"
      :ui="{ features: 'sm:grid-cols-1 lg:grid-cols-1', title:'text-white', description:'text-emerald-300'  }"
      class="relative overflow-hidden question-box bg-emerald-600 !text-white"
    >
      <template #headline>
        <UColorModeImage
          light="/images/light/line-3.svg"
          dark="/images/dark/line-3.svg"
          class="absolute -top-10 sm:top-0 right-1/2 h-24"
        />
      </template>
      <template #features>
        <UAccordion :collapsible="false" :items="page.faq.items" />
      </template>
    </UPageSection>


  </UPage>
</template>
<script setup lang="ts">
import heroImages from '@/assets/images/banner-icon-img.png';
import keywords from '@/assets/images/keywords.mp4';
import monitorRank from '@/assets/images/monitor-rank.mp4';
import keywordAsin from '@/assets/images/keyword-asin.mp4';
import competitiveGroup from '@/assets/images/competitive-group.mp4';
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()
const { data: page } = await useAsyncData('index', () => queryCollection('content').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
const pageCont = reactive({
  isFixed: false,
  videos:[keywords,monitorRank,keywordAsin,competitiveGroup ]
})
const featureLinks = computed(() => [{
  label: '关键词近14天展示位',
  to: '#featuresId1',
  active: activeHeadings.value.includes('featuresId1')
}, {
  label: '排名趋势',
  to: '#featuresId2',
  color: 'neutral',
  active: activeHeadings.value.includes('featuresId2')
}, {
  label: '关键词分析结果',
  to: '#featuresId3',
  color: 'neutral',
  active: activeHeadings.value.includes('featuresId3')
}, {
  label: '竞品组',
  to: '#featuresId4',
  color: 'neutral',
  active: activeHeadings.value.includes('featuresId4')
}])

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

// 监听滚动事件
function handleScroll() {
  pageCont.isFixed = window.scrollY > 600 && window.scrollY<3500;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});


nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#featuresId1'),
    document.querySelector('#featuresId2'),
    document.querySelector('#featuresId3'),
    document.querySelector('#featuresId4'),
    document.querySelector('#faq')
  ].filter(Boolean) as Element[])
})
</script>
<style scoped>
.page-hero-bg{
  background-image: url("@/assets/images/banner-img.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
#featuresId1, #featuresId2, #featuresId3, #featuresId4{
  scroll-margin-top: 120px;
}
</style>
