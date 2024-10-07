<script setup lang="ts">

definePageMeta({
  layout: false,
});

</script>

<template>
  <NuxtLayout name="top">
    <div class="container-S">
      <h1 class="top-logo js-inview js-fade-in">
        <img src="/public/img/common/header-logo-black.svg" alt="fragile">
      </h1>
      <ul class="link-list js-inview js-transition-delay js-fade-in">
        <li class="link-list__item"><a href="/about">About</a></li>
        <!-- <li class="link-list__item"><a href="/work">Work</a></li> -->
        <li class="link-list__item"><a href="/news">Work</a></li>
        <li class="link-list__item"><a href="/contact">Contact</a></li>
        <li class="link-list__item --sns">
          <a href="https://github.com/Emma-miu" target="_blank" class="--git" rel="noopener noreferrer">Github</a>
          <a href="https://codepen.io/emma-miu" target="_blank" class="--code" rel="noopener noreferrer">Codepen</a>
          <a href="https://www.linkedin.com/in/emmafradin/" target="_blank"  class="--link">Linkedin</a>
        </li>
      </ul>
    </div>
  </NuxtLayout>
</template>

<style></style>
