<template>
  <div id="app">
    <Weather />
    <Search />
    <Links :items="Bookmarks.items" />
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
  },
  data() {
    return {
      Bookmarks: {
        nextBookmarkID: 3,
        items: [
          {
            id: 0,
            title: 'General',
            nextLinkID: 4,
            links: [
              {
                id: 0,
                title: 'Reddit',
                url: 'https://www.reddit.com/'
              },
              {
                id: 1,
                title: 'YouTube',
                url: 'https://www.youtube.com/'
              },
              {
                id: 2,
                title: 'Gmail',
                url: 'https://mail.google.com/'
              },
              {
                id: 3,
                title: 'Netflix',
                url: 'https://www.netflix.com/'
              }
            ]
          },
          {
            id: 1,
            title: 'Dev Stuff',
            nextLinkID: 4,
            links: [
              {
                id: 0,
                title: 'Github',
                url: 'https://www.github.com/'
              },
              {
                id: 1,
                title: 'Udemy',
                url: 'https://www.udemy.com/'
              },
              {
                id: 2,
                title: 'Codewars',
                url: 'https://www.codewars.com/'
              },
              {
                id: 3,
                title: 'LeetCode',
                url: 'https://www.leetcode.com/'
              }
            ]
          },
          {
            id: 2,
            title: 'Anime/Korean',
            nextLinkID: 3,
            links: [
              {
                id: 0,
                title: 'Animeshow',
                url: 'https://www.animeshow.tv/'
              },
              {
                id: 1,
                title: 'Crunchyroll',
                url: 'https://www.crunchyroll.com/'
              },
              {
                id: 2,
                title: 'Viki',
                url: 'https://www.viki.com/'
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
</style>


