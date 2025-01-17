<script setup lang="ts">
import type { work } from '~/types/work';

const clrCoks = await clearCookies();
const props = defineProps({
  work: {
    type: Object as () => work,
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
  <section class="work-detail iswork">
    <div class="container-S">
      <p class="work-detail__date">{{ dateFormat(work.release_at) }}</p>

      <h2 class="work-detail__title">{{ work.title }}</h2>
      <p v-if="work.en_title" class="work-detail__subtitle">{{ work.en_title }}</p>

      <div class="work-detail__content">
        <div v-html=description></div>
      </div>

      <ul class="sns-share__list">
        <li class="sns-share__item --x">
          <a :href="`https://twitter.com/intent/tweet?url=https://www.fragileart.net/&text=${work.title}`" class="sns-share-item__link"></a>
        </li>
        <li class="sns-share__item --facebook">
          <a href="https://www.facebook.com/sharer.php?u=https://www.fragileart.net/" class="sns-share-item__link"></a>
        </li>
      </ul>
      
      <a :href="`/work/?page=${props.currentPage}`" class="button work-detail__button">Back to list</a>
    </div>
  </section>
</template>

<style>
</style>