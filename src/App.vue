<template>
  <div id="app">
    <Weather />
    <Search />
    <Links />
  </div>
</template>

<script>
import Weather from './components/Weather.vue'
import Search from './components/Search.vue'
import Links from './components/Links.vue'

export default {
  name: 'app',
  components: {
    Weather,
    Search,
    Links
  }
}
</script>

<style lang="scss">
</style>
