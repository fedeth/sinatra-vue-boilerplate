
<script>
  export default {}
</script>

<template>
  <div id="foo">
    <h1>Foo Component {{ $route.params.id }} </h1>
  </div>
</template>

<style lang="scss">
  #foo {
    background-color: rgb(216, 237, 250);
  }
</style>