<script setup lang="ts">
import type { News } from '~/types/news';

const clrCoks = await clearCookies();
const props = defineProps({
  news: {
    type: Object as () => News,
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
  <section class="news-detail isNews">
    <div class="container-S">
      <p class="news-detail__date">{{ dateFormat(news.release_at) }}</p>

      <h2 class="news-detail__title">{{ news.title }}</h2>
      <p v-if="news.en_title" class="news-detail__subtitle">{{ news.en_title }}</p>

      <div class="news-detail__content">
        <div v-html=description></div>
      </div>

      <ul class="sns-share__list">
        <li class="sns-share__item --x">
          <a :href="`https://twitter.com/intent/tweet?url=https://www.fragileart.net/&text=${news.title}`" class="sns-share-item__link"></a>
        </li>
        <li class="sns-share__item --facebook">
          <a href="https://www.facebook.com/sharer.php?u=https://www.fragileart.net/" class="sns-share-item__link"></a>
        </li>
      </ul>
      
      <a :href="`/news/?page=${props.currentPage}`" class="button news-detail__button">Back to list</a>
    </div>
  </section>
</template>

<style>
</style>