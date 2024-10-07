<script setup lang="ts">
import type { News } from '~/types/news';

const { $isLocaleJa } = useNuxtApp();
defineProps({
  news: {
    type: Object as () => News,
    required: true
  },
  currentPage: {
    type: Number,
    required: false
  }
});
</script>

<template>
  <li class="news-list__item">
    <a :href="`/news/${news.id}?page=${currentPage}`" class="news-list__link">
      <div class="news-list-item__img">
        <img :src="news.main_visual?.url" alt="" class="" />
      </div>
      
      <div class="news-list-item__content">
        <p class="news-list-item__date">{{ dateFormat(news.release_at) }}</p>
        <p class="news-list-item__title --jp">{{ news.title }}</p>
        <p class="news-list-item__subtitle">{{ news.en_title }}</p>
        <div class="news-list-item__button">
          <span class="news-list-item__arrow"></span>
        </div>
      </div>
    </a>
  </li>
</template>
