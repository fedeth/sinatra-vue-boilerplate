
<script>
  export default {}
</script>

<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <!-- use router-link component for navigation. -->
      <router-link to="/foo/100">Go to Foo</router-link>
      <router-link to="/bar/200">Go to Bar</router-link>
    </p>
    <!-- route outlet -->
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
  #app {
    background-color: rgb(236, 236, 236);
  }
</style>