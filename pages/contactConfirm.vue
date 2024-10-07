<script setup lang="ts">
import type { NuxtError } from '#app';
import { useCookie, useNuxtApp, navigateTo } from '#app';
import type { ContactMessageParams } from '~/types/contactMessageParams';

const { $localeJa } = useNuxtApp();
const props = defineProps({error: Object as () => NuxtError});
const saveName = useCookie('saveName', () => '');
const saveCompany = useCookie('saveCompany', () => '');
const saveEmail = useCookie('saveEmail', () => '');
const saveMessage = useCookie('saveMessage', () => '');

let disableSubmit = false;
function submit() {
  if (disableSubmit) { return; }
  disableSubmit = true;
  const params:ContactMessageParams = {
    email: saveEmail.value ?? "",
    name: saveName.value ?? "",
    company: saveCompany.value ?? "",
    message: saveMessage.value ?? "",
    language: $localeJa
  };
  sendContactMessage(
    params
  ).then(async(res) => {
    clearCookies();
    disableSubmit = false;
    await navigateTo({path: '/contactComplete'});
  }).catch(async(err) => {
    disableSubmit = false;
    await navigateTo({path: '/error'});
  });
}
</script>

<template>
  <section class="contact-confirm">
    <div class="container-S">
      <div class="contact-confirm__block">
        <h2 class="contact-confirm__title --jp">お問い合わせ内容のご確認</h2>
        <h2 class="contact-confirm__title">Inquiry confirmation</h2>
      </div>
      
      <form v-on:submit.prevent="submit()">
        <ul class="contact-confirm__list">
          <li class="contact-confirm__item --name">
            <p class="contact-confirm-item__title"><span class="--jp">お名前</span> / Your name *</p>
            <p class="contact-confirm-item__text">{{ saveName }}</p>
          </li>
          <li class="contact-confirm__item --company">
            <p class="contact-confirm-item__title"><span class="--jp">貴社名</span> / Company name *</p>
            <p class="contact-confirm-item__text">{{ saveCompany }}</p>
          </li>
          <li class="contact-confirm__item --email">
            <p class="contact-confirm-item__title">Email *</p>
            <p class="contact-confirm-item__text">{{ saveEmail }}</p>
          </li>
          <li class="contact-confirm__item --text">
            <p class="contact-confirm-item__title"><span class="--jp">お問い合わせ内容</span> / Inquiry *</p>
            <p class="contact-confirm-item__text" style="white-space:pre-line;">
              {{ saveMessage }}
            </p>
          </li>
        </ul>
        <div class="contact-confirm__btnwrap">
          <a href="/contact/" class="button button-secondary"><i class="ico-arrow --left --grey"></i>Back</a>
          <div class="button contact-confirm-btn__submit">
            <input type="submit" value="Send"><i class="ico-arrow"></i>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<style>
</style>
