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
  display: flex;
  width: 100%;
  flex-flow: wrap;
  justify-content: center;
  flex-direction: row;
}

@media (max-width: 1245px) {
  .bookmarkContainer {
    flex-direction: column;
    align-items: center;
  }
}
</style>
