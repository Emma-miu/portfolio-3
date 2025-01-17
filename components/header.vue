<script setup lang="ts">
  const { currentRoute } = useRouter();
  const routeName = currentRoute.value.name;
  let page = routeName.charAt(0).toUpperCase() + routeName.slice(1);
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <h1 class="header__logo"><a href="/" class="">portfolio</a></h1>

      <!-- header menu start -->
       <div class="header__content">
          <p class="header__current js-current">{{ page }}</p>
          <div class="header__nav-toggle">
            <span class="header-nav-toggle__line --top"></span>
            <span class="header-nav-toggle__line --bottom"></span>
          </div>
        </div>
      
        <div class="header__menu">
          <div class="header-menu__inner">
            <nav class="header-menu__nav">
              <ul class="link-list --header">
                <li class="link-list__item">
                  <a href="/about" class="js-nav-close js-link-name">About</a>
                </li>
                <li class="link-list__item">
                  <a href="/work" class="js-nav-close js-link-name">Works</a>
                </li>
                <li class="link-list__item">
                  <a href="/contact" class="js-nav-close js-link-name">Contact</a>
                </li>
              </ul>
            </nav>
            <div class="header-menu__bottom">
              <div class="header-menu__link">
                <a href="https://github.com/Emma-miu" target="_blank" class="ico-sns --git" rel="noopener noreferrer">Github</a>
                <a href="https://codepen.io/emma-miu" target="_blank" class="ico-sns --code" rel="noopener noreferrer">Codepen</a>
                <a href="https://www.linkedin.com/in/emmafradin/" target="_blank" class="ico-sns --link">Say Hi</a>
              </div>
              
              
            </div>
          </div>
        </div>
      <!-- header menu end -->

    </div>
  </header>
</template>