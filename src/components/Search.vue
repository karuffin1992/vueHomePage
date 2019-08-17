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
.searchContainer {
  margin: 0 auto;
  width: 1100px;
}

form input[type="text"] {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 2px solid $black;
  border-radius: 25px;
  font-size: 1.25rem;
  text-align: center;
  background-color: $black;
  color: $white;
}

form input:focus{
  outline: none;
}

@media (max-width: 1155px) {
  .searchContainer {
    width: 975px;
  }
}

@media (max-width: 1015px) {
  .searchContainer {
    width: 850px;
  }
}

@media (max-width: 930px) {
  .searchContainer {
    width: 725px;
  }
}

@media (max-width: 775px) {
  .searchContainer {
    width: 585px;
  }
}

@media (max-width: 630px) {
  .searchContainer {
    width: 460px;
  }
}

@media (max-width: 490px) {
  .searchContainer {
    width: 370px;
  }
}

@media (max-width: 390px) {
  .searchContainer {
    width: 320px;
  }
}

@media (max-width: 320px) {
  .searchContainer {
    width: 250px;
  }
}
</style>
