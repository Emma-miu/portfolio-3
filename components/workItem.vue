<script setup lang="ts">
import type { work } from '~/types/work';

const { $isLocaleJa } = useNuxtApp();
defineProps({
  work: {
    type: Object as () => work,
    required: true
  },
  currentPage: {
    type: Number,
    required: false
  }
});
</script>

<template>
  <li class="work-list__item">
    <a :href="`/work/${work.id}?page=${currentPage}`" class="work-list__link">
      <div class="work-list-item__img">
        <img :src="work.main_visual?.url" alt="" class="" />
      </div>
      
      <div class="work-list-item__content">
        <p class="work-list-item__date">{{ dateFormat(work.release_at) }}</p>
        <p class="work-list-item__title --jp">{{ work.title }}</p>
        <p class="work-list-item__subtitle">{{ work.en_title }}</p>
        <div class="work-list-item__button">
          <span class="work-list-item__arrow"></span>
        </div>
      </div>
    </a>
  </li>
</template>
