<template>
    <li class="linkItem">
        <a class="linkA" target="_blank" :href="url">{{ title }}</a>
    </li>
</template>

<script>
export default {
  name: 'BookmarkItem',
  props: {
    id: Number,
    title: String,
    url: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
li.linkItem {
  list-style: none;
  display: inline-block;
  padding: 7px 5px;
  width: 100%;
  font-size: 20px;
}

li.linkItem a.linkA {
  color: $lightGrey;
  text-decoration: none;
}

li.linkItem:hover a.linkA {
  color: $white;
}
</style>
