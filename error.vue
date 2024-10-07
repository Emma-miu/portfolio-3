<script setup lang="ts">
import type { NuxtError } from '#app'
const props = defineProps({error: Object as () => NuxtError});
const errorMesseage = useState('errorMesseage', () => '');
</script>

<template>
  <section class="error">
    <div class="container-S">
      <h2 class="error__title">ERROR</h2>
      <p class="error__text">{{ errorMesseage }}</p>
      <a class="button error__button" href="/">Back to top</a>
    </div>
  </section>
</template>
