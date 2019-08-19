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
.timeWeatherContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.bigBox {
  height: 195px;
  width: 600px;
  margin: 0 auto;  
  overflow: hidden;
  background-color: $black;
  box-shadow: 0 0 15px hsla(0,0%,0%,.8);
  border-radius: 3px;
  border-width: 5px 0px;
  border-style: solid;
  border-color: $darkCyan;
}

.clock {
  width: 60%;
}

.weather {
  width: 40%;
}

.date {
  font-size: 1em;
  color: $white;
  height: 20px;
}

.time {
  font-size: 5em;
  color: $white;
  height: 90px;
}

.weatherText {  
  text-align: center;
  color: $lighterGrey;
  height: 25px;
}

@media (max-width: 630px) {
  .bigBox {
    height: 320px;
    width: 460px;
    margin: 0 auto;  
    overflow: hidden;
    background-color: $black;
    box-shadow: 0 0 15px hsla(0,0%,0%,.8);
    border-radius: 3px;
    border-width: 5px 0px;
    border-style: solid;
    border-color: $darkCyan;
  }

  .timeWeatherContainer {
    display: flex;
    flex-direction: column;    
    justify-content: space-evenly;
    align-items: center;
  }

  .clock {
    width: 100%;
    padding-top: 2em;
  }

  .weather {
    width: 100%;
  }
}

@media (max-width: 490px) {
  .bigBox {
    width: 370px;
  }
}

@media (max-width: 390px) {
  .bigBox {
    width: 320px;
  }

  .time {
    font-size: 4em;  
    height: 75px;
  }
}

@media (max-width: 320px) {
  .bigBox {
    height: 275px;
    width: 250px;
  }

  .time {
    font-size: 3em;  
    height: 60px;
  }
}
</style>
