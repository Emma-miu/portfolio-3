// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "@/assets/css/destyle.css",
    "@/assets/scss/style.scss",
  ],
  vite: {
   css: {
     preprocessorOptions: {
       scss: {
         additionalData: '@import "@/assets/scss/_variables.scss";',
       },
     },
   },
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
        { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/img/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32',href: '/img/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16',href: '/img/favicon-16x16.png' },
        { rel: 'mask-icon', color: '#000000', href: '/img/safari-pinned-tab.svg' },
      ],
      title: 'Emma Fradin Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Emma Fradin Portfolio' },
        { property: 'og:image', content: '', },
        { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#000000' },
        { hid: 'theme-color', name: 'theme-color', content: '#000000' },
      ],
      htmlAttrs: {
        lang: 'en'
      },
      script: [
        { src:'/js/jquery-3.7.1.min.js' },
        { src:'/js/jquery.inview.min.js' },
        { src:'/js/script.js' },
        //{ hid: 'GAsrc', src: 'https://www.googletagmanager.com/gtag/js?id=' + GAID, async: true },
        //{ hid: 'GAcode', innerHTML: GAcode }
      ],
      // __dangerouslyDisableSanitizersByTagID: {
      //   'GAsrc': ['innerHTML'],
      //   'GAcode': ['innerHTML']
      // }
    },
  },
})
