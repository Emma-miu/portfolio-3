<script setup lang="ts">
  const { currentRoute } = useRouter();
  const routeName = currentRoute.value.name;
  let page = routeName.charAt(0).toUpperCase() + routeName.slice(1);
</script>

<template>
  <header class="header">

  </header>
</template>