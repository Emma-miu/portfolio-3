<script setup lang="ts">
  const clrCoks = await clearCookies();
</script>

<template>
  <section class="contact-complete">
    <div class="container-S">
      <div class="contact-complete__block">
        <h2 class="contact-complete__title --jp">お問い合わせ完了</h2>
        <h2 class="contact-complete__title">Inquiry sent</h2>
      </div>
      
      <p class="contact-complete__text --jp">お問い合わせありがとうございます。<br>
        お問い合わせいただいた内容については、確認の上、ご返信いたします。</p>
      <p class="contact-complete__text">Thank you for your inquiry. We will be in touch shortly.</p>
      <a href="/" class="button contact-complete__button">Back</a>
    </div>
  </section>
</template>

<style>
</style>