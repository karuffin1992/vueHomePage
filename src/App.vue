<template>
  <div class="app">
    <Weather
      :currName="currName"
      :currTemp="currTemp"
      :currWeather="currWeather"
    />
    <Search />
    <Links :items="Bookmarks.items" />
  </div>
</template>

<script>
import Weather from './components/Weather.vue'
import Search from './components/Search.vue'
import Links from './components/Links.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    Weather,
    Search,
    Links
  },
  async created () {
    const res = await this.getWeatherIcon()
    this.currName = res.data.name
    this.currTemp = res.data.main.temp
    this.currWeather = res.data.weather['0'].main
    console.log(res)
  },
  methods: {
    getWeatherIcon: async () => {
      const zipCode = '27511'
      // API key is for a throwaway account
      const APIKEY = 'b1f543aec09f0db96158d35a8419b943'
      let apiURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&APPID=${APIKEY}`

      return axios(apiURL)
    }
  },
  data () {
    return {
      currName: '',
      currTemp: 0,
      currWeather: '',
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
/* Main */
html {
  box-sizing: border-box;
}

html *,
html *:before,
html *:after {
  box-sizing: inherit;
}

body {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  background: rgb(16,46,49);
  background: linear-gradient(90deg, rgba(16,46,49,1) 0%, rgba(42,117,127,1) 33%, rgba(57,159,173,1) 66%, rgba(73,206,223,1) 100%);
}

.pageContainer {
  padding: 1em;
  opacity: .9;
}
</style>
