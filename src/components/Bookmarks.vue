<template>
    <div class="box">
        <div class="boxContent">
            <p>{{ title }}</p>
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
.box {
  width: 303px;
  height: 130px;
  overflow: hidden;
  float: left;
  background-color: $black;
  border-radius: 3px;
  padding: 5px;
  transition: 0.3s;
  border-width: 5px 0;
  border-style: solid;
  border-color: $darkCyan;
  margin: 0em 3em 0em 3em;
  box-shadow: 0 0 15px hsla(0,0%,0%,.8);
}

.boxContent, .boxContent a {
  letter-spacing: 0.02em;
  transition: 0.3s;
}

.boxContent p {
  font-size: 25px;
  text-transform: uppercase;
  margin: 1.5em;
}

.box:hover .boxContent, .box:hover .boxContent ul {
  transition: 0.3s;
  opacity: 1;
  margin: 0;
}

.box:hover {
  transition: 0.3s;
  height: 300px;
  /* if you want to expand boxes only to the bottom, delete the line below (just margin-top) */
  /* margin-top:-60px; */
  border-width: 5px 0;
  border-style: solid;
  border-color: $darkCyan;
}

ul.linkBox {
  padding: 0;
  text-align: center;
  opacity: 0.0;
  transition: 0.3s;
}

@media (max-width: 444px) {
  .box {
    margin: 0 auto;
  }
}
</style>
