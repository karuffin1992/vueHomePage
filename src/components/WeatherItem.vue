<template>
    <div class="weather">
        <div v-bind:class="weatherContainer">
            <div v-bind:class="mainIcon">
                <div v-bind:class="mainIcon_2"></div>
            </div>
            <div v-bind:class="secondaryIcon">
                <div v-bind:class="secIcon_2"></div>
                <div v-bind:class="secIcon_3"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'WeatherItem',
  props: {
    currWeather: String
  },
  computed: {
    weatherContainer: function () {
      return {
        icon: this.currWeather !== '',
        sunny: this.currWeather === 'Clear',
        cloudy: this.currWeather === 'Clouds' || this.currWeather === 'Mist' || this.currWeather === 'Haze',
        flurries: this.currWeather === 'Snow',
        thunderstorm: this.currWeather === 'Thunderstorm',
        rainy: this.currWeather === 'Rain' || this.currWeather === 'Drizzle'
      }
    },
    mainIcon: function () {
      return {
        sun: this.currWeather === 'Clear',
        cloud: this.currWeather !== 'Clear'
      }
    },
    mainIcon_2: function () {
      return {
        rays: this.currWeather === 'Clear'
      }
    },
    secondaryIcon: function () {
      return {
        cloud: this.currWeather === 'Clouds' || this.currWeather === 'Mist' || this.currWeather === 'Haze',
        snow: this.currWeather === 'Snow',
        lightning: this.currWeather === 'Thunderstorm',
        rain: this.currWeather === 'Rain' || this.currWeather === 'Drizzle'
      }
    },
    secIcon_2: function () {
      return {
        flake: this.currWeather === 'Snow',
        bolt: this.currWeather === 'Thunderstorm'
      }
    },
    secIcon_3: function () {
      return {
        flake: this.currWeather === 'Snow',
        bolt: this.currWeather === 'Thunderstorm'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
