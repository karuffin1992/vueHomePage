<template>
    <section class="bookmark pageContainer">
        <div class="bookmarkContainer">
            <Bookmarks />
        </div>
    </section>
</template>

<script>
import Bookmarks from './Bookmarks.vue'

export default {
  name: 'Links',
  components: {
      Bookmarks
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
