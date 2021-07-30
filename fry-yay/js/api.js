const apiURL="https://api.openweathermap.org/data/2.5/onecall?lat=12.8797&lon=121.7740&exclude=hourly,daily&appid=55fa2df7df9cc9962a18b5c146dd8cb1&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('outputTemp').textContent = jsObject.current.temp;
    document.getElementById('descript').textContent = jsObject.current.weather.description;
    document.getElementById('humid').textContent = jsObject.current.humidity;
    
//const imagesrc = "https://openweathermap.org/img/wn/10d@2x.png" + jsObject.weather[4].icon + '.png';  // note the concatenation
//const desc = jsObject.weather[4].description;  // note how we reference the weather array
//document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
//document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
//document.getElementById('icon').setAttribute('alt', desc);
const dayofWeek =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const fiveDayForecast = jsObject.list.filter(daily => daily.temp.day.includes('12:00:00'));
//console.log(fiveDayForecast);

fiveDayForecast.forEach(x=>{
  let d= new Date(x.temp.day);
  document.getElementById(`dayofWeek${day}`).textContent = dayofWeek[d.getDay()];
  document.getElementById(`forecast${day}`).textContent = x.current.temp;
  //document.getElementById(`icon${day}`).setAttribute('src', 'https://openweathermap.org/img/w/' + x.weather[0].icon + '.png');
  day++
});

});
