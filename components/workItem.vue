<script setup lang="ts">
  import type { Work } from '~/types/work';

  defineProps({
    work: {
      type: Object as () => Work,
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
      <div class="work-list__img">
        <img :src="work.main_visual?.url" alt="" />
      </div>
      <p>{{ work.title }}</p>
    </a>
  </li>
</template>


