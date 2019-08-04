<template>
    <section class="search pageContainer">
      <div class="searchContainer">
        <form action="https://google.com/search" method="get" target="_blank">
          <input type="text" name="q" placeholder="Search..." autofocus="autofocus" autocomplete="off"/>
        </form>
      </div>
    </section>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
