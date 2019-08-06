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
</style>