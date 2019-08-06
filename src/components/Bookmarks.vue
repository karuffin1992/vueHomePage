<template>
    <div class="box">
        <div class="boxContent">
            <p>General</p>
            <ul class="linkBox">
                <BookmarkItem
                    v-for="link in links"
                    :key="link.id"
                    :id="link.id"
                    :title="link.title"
                    :url="link.url"
                />
            </ul>
        </div>
    </div>
</template>

<script>
import BookmarkItem from './BookmarkItem.vue'

export default {
  name: 'Bookmarks',
  components: {
    BookmarkItem
  },
  props: {
    id: Number,
    title: String,
    links: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>