
<script>
  export default {}
</script>

<template>
  <div id="bar">
    <h1>Bar Component {{ $route.params.id }}</h1>
  </div>
</template>

<style lang="scss" scoped>
  #bar {
    background-color: rgb(212, 255, 212);
  }
</style>