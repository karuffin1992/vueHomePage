<template>
  <section class="timeWeather pageContainer">
    <div class="timeWeatherContainer bigBox">
      <div class="clock">
        <div class="clockContainer">
          <div class="date">{{ getDate() }}</div>
          <div class="time">{{ time }}</div>
          <div class="weatherText">{{ getDayAndTemp() }}</div>
        </div>
      </div>
      <div class="weather">
        <div class="weatherContainer">
          <div class="mainIcon">
            <div class="mainIcon_2"></div>
          </div>
          <div class="secondaryIcon">
            <div class="secIcon_2"></div>
            <div class="secIcon_3"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Weather',
  props: {
    cityName: String,
    cityTemp: Number
  },
  data() {
    return {
      time: ''
    }
  },
  mounted () {
    this.$options.interval = setInterval(this.getTime, 1000);
  },
  beforeDestroy () {
    clearInterval(this.$options.interval);
  },
  methods: {
    getTime: function () {
      const date = new Date()

      this.time =  `${date.getHours()}: ${this.addZero(date.getMinutes())}: ${this.addZero(date.getSeconds())}`
    },
    addZero: function (time) {
      if (time < 10) time = '0' + time
      return time
    },
    getDate: function () {
      const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

      let date = new Date()
      let dateStr = months[date.getUTCMonth()] + ' ' + date.getUTCDate() + ', ' + date.getUTCFullYear()
      let dayOfWeek = weekday[date.getDay()]

      return `${dateStr} | ${dayOfWeek}`
    },
    getDayAndTemp: function () {
      return `${this.cityName} | ${this.convertToFahrenheit(this.cityTemp)} ° F`
    },
    convertToFahrenheit: function (temp) {
      return Math.round(((temp - 273.15) * 1.8) + 32)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>