<template>
  <USeparator class="h-px"/>
  <UFooter :ui="{ top: 'border-b border-(--ui-border)' }">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns">
          <template #right>
            <img class="w-full" :src="images"/>
          </template>
        </UFooterColumns>
      </UContainer>
    </template>

    <template #left>
      <p class="text-sm text-(--ui-text-muted)">
        Copyright © {{ new Date().getFullYear() }}.  长沙云一优信息科技有限公司
      </p>
    </template>
  </UFooter>
</template>
<script setup lang="ts">
import images from '~/assets/images/QRcode.png';
const columns = [{
  label: '产品',
  children: [{
    label: '客服 Workspace',
    to: 'https://ear-data.com/tickets',
    target: '_blank'
  }, {
    label: '数据分析',
    to: 'https://ear-data.com/analyze',
    target: '_blank'
  }, {
    label: 'EarData 浏览器插件',
    to: 'https://ear-data.com/helper',
    target: '_blank'
  }]
}, {
  label: '资源',
  children: [{
    label: '帮助中心',
    to: ' https://www.yuque.com/eardata/help',
    target: '_blank'
  }]
}, {
  label: '公司',
  children: [{
    label: '关于我们',
    to: ' https://ear-data.com/about',
    target: '_blank'
  }, {
    label: '使用条款',
    to: ' https://ear-data.com/terms-and-policies#terms',
    target: '_blank'
  }, {
    label: '隐私保护',
    to: ' https://ear-data.com/terms-and-policies#privacy',
    target: '_blank'
  }]
},
  {
    label: '其他',
    children: [{
      label: '用户支持',
    }, {
      label: 'support@ear-data.com',
    }]
  }]

</script>

