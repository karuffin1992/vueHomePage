<template>
    <section class="bookmark pageContainer">
        <div class="bookmarkContainer">
            <Bookmarks v-for="item in items"
              :key="item.id"
              :id="item.id"
              :title="item.title"
              :links="item.links"
            />
        </div>
    </section>
</template>

<script>
import Bookmarks from './Bookmarks.vue'

export default {
  name: 'Links',
  props: {
    items: Array
  },
  components: {
    Bookmarks
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bookmarkContainer {
  text-align: center;
  color: $white;
  height: 130px;
  width: 1200px;
  margin: 0 auto;
}
</style>
