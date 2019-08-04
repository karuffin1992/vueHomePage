function onLoad(){
  getTime(); // Set the clock
  getWeather(); // Get the weather forecast
}

function getTime(){
  var date = new Date();

  const weekday = ['Sunday', 'Monday', 'Tuesday'
    , 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January','February','March','April','May','June'
    ,'July','August','September','October','November','December'];

  var hours = date.getHours();
  var mins = addZero(date.getMinutes());
  var secs = addZero(date.getSeconds());
  var timeStr = hours + ':' + mins + ':' + secs;

  var today = date.getDay();
  var month = date.getUTCMonth();
  var day = date.getUTCDate();
  var year = date.getUTCFullYear();
  var dateStr = months[month] + ' ' + day + ', ' + year;
  var dayOfWeek = weekday[today];

  $('#time').html(timeStr);
  $('#date').html(dateStr + ' | ' + dayOfWeek);

  var timer = setTimeout(getTime, 500);
}

function addZero(time) {
  if (time < 10) {
      time = '0' + time;
  }

  return time;
}

var Result;
async function getWeather(){
  const zipCode = '27511';
  // API key is for a throwaway account
  const APIKEY = 'b1f543aec09f0db96158d35a8419b943';
  let apiURL =  'https://api.openweathermap.org/data/2.5/weather?zip='+zipCode+',us&APPID='+APIKEY;

  await fetch(apiURL)
  .then(data => data.json())
  .then((res) => {
    Result = res;
    //console.log(res);
  })
  .catch(error => console.log(error));

  processWeatherData(); // Process Result from REST call
}

function processWeatherData(){
  getDayAndTemp(); // Get day and its temp
  addWeatherIcons(); // Add animated icon for day
}

function getDayAndTemp(){
  var cityName = Result.name;
  var temperature = convertToFahrenheit();
  var output = cityName + ' | ' + temperature + '° F';

  $('#weatherText').html(output);
}

function convertToFahrenheit(){
  var kelvinTemp = Result.main.temp;
  var fahrTemp = Math.round(((kelvinTemp - 273.15) * 1.8) + 32);

  return fahrTemp;
}

function addWeatherIcons(){
  // OpenWeatherMap API has weather conditions
  switch(Result.weather['0'].main){
    case 'Rain':
      rainyWeather();
      break;
    case 'Drizzle':
      rainyWeather();
      break;
    case 'Thunderstorm':
      stormyWeather();
      break;
    case 'Snow':
      blizzardWeather();
      break;
    case 'Clouds':
      cloudyWeather();
      break;
    case 'Mist':
      cloudyWeather();
      break;
    case 'Haze':
      cloudyWeather();
      break;
    case 'Clear':
      clearWeather();
      break;
    default:
      console.log('Error: Weather not found - add to switch');
      console.log(Result.weather['0'].main);
  }
}

// Weather Icons
// Check Josh Bader's code for animated SVG icons
function clearWeather() {
  $('#weatherContainer').addClass('icon sunny');
  $('#mainIcon').addClass('sun');
  $('#mainIcon_2').addClass('rays');
}

function cloudyWeather() {
  $('#weatherContainer').addClass('icon cloudy');
  $('#mainIcon').addClass('cloud');
  $('#secondaryIcon').addClass('cloud');
}

function blizzardWeather() {
  $('#weatherContainer').addClass('icon flurries');
  $('#mainIcon').addClass('cloud');
  $('#secondaryIcon').addClass('snow');
  $('#secIcon_2').addClass('flake');
  $('#secIcon_3').addClass('flake');
}

function stormyWeather() {
  $('#weatherContainer').addClass('icon thunder-storm');
  $('#mainIcon').addClass('cloud');
  $('#secondaryIcon').addClass('lightning');
  $('#secIcon_2').addClass('bolt');
  $('#secIcon_3').addClass('bolt');
}

function rainyWeather() {
  $('#weatherContainer').addClass('icon rainy');
  $('#mainIcon').addClass('cloud');
  $('#secondaryIcon').addClass('rain');
}
