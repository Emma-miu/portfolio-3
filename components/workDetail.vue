<script setup lang="ts">
  import type { Work } from '~/types/work';

  const clrCoks = await clearCookies();

  const props = defineProps({
    work: {
      type: Object as () => Work,
      required: true
    },
    description: {
      type: String,
      required: true,
      default: ''
    },
    currentPage: {
      type: Number,
      required: false,
      default: 1
    }
  });
</script>

<template>
  <!-- 記事詳細 -->
   <div class="isWork container-M">
    <div v-html="description" class="work-detail"></div>

    <!-- 戻るボタン -->
    <a :href="`/work/?page=${props.currentPage}`" class="button work-detail__button">Back to list</a>
   </div>
</template>

<style>
</style>
