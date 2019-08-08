<template>
  <section class="timeWeather pageContainer">
    <div class="timeWeatherContainer bigBox">
      <div class="clock">
        <div class="clockContainer">
          <div class="date">{{ getDate() }}</div>
          <div ref="time" class="time">{{ time }}</div>
          <div class="weatherText">{{ getDayAndTemp() }}</div>
        </div>
      </div>
      <WeatherItem :currWeather="currWeather" />
    </div>
  </section>
</template>

<script>
import WeatherItem from './WeatherItem'

export default {
  name: 'Weather',
  components: {
    WeatherItem
  },
  props: {
    currName: String,
    currTemp: Number,
    currWeather: String
  },
  data () {
    return {
      time: ''
    }
  },
  created () {
    setInterval(this.getTime, 1000)
  },
  methods: {
    getTime: function () {
      const date = new Date()

      this.time = `${date.getHours()}:${this.addZero(date.getMinutes())}:${this.addZero(date.getSeconds())}`
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
      return `${this.currName} | ${this.convertToFahrenheit(this.currTemp)} ° F`
    },
    convertToFahrenheit: function (temp) {
      return Math.round(((temp - 273.15) * 1.8) + 32)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* Time/Weather */
.bigBox {
  height: 195px;
  overflow: hidden;
  background-color: $black;
  border-radius: 3px;
  border-width: 5px 0px;
  border-style: solid;
  border-color: $darkCyan;
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 15px hsla(0,0%,0%,.8);
}

.clock {
  padding-top: 2em;
  padding-left: 3em;
  float: left;
}

.date {
  display: block;
  font-size: 1em;
  color: $white;
  height: 20px;
}

.time {
  display: block;
  font-size: 5em;
  color: $white;
  height: 90px;
}

.weather {
  padding-top: 1.75em;
  padding-right: 7.5em;
  float: right;
}

.weatherText {
  display: block;
  text-align: center;
  color: $lighterGrey;
  height: 25px;
}
</style>
