<template>
  <section class="timeWeather pageContainer">
    <div class="timeWeatherContainer bigBox">
      <div class="clock">
        <div class="clockContainer">
          <div class="date"></div>
          <div class="time"></div>
          <div class="weatherText"></div>
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
  name: 'Weather'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
