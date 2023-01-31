
 // APi Key
var APIKey = "f33f184931595a6e106cb189ecdd0a1b";

function getLocation(cityName){
  var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=" + APIKey;  
  // returns response based on city name - lat lon
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
    
        let lat = response[0].lat.toFixed(2);
        let lon = response[0].lon.toFixed(2);

        getWeather(lat,lon);

        // sae name from here to local storage
      

})
}


function getWeather(lat, lon){
    //   second query for lat lon
    var queryURL2 = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=metric&appid=" + APIKey ;

    $.ajax({
      url: queryURL2,
      method: "GET"
    }).then(function(response) {

      console.log(response);

      renderWeather(response)



});
  
  
}

function renderWeather(weatherData){
  var currentDay = weatherData.list[0];
  

  $("#city").text(weatherData.city.name);
  $("#wind").text("Wind Speed: " + currentDay.wind.speed + " MPH");
  $("#humidity").text("Humidity: " + currentDay.main.humidity + "%");
  $("#temp").text("Temperature: " + currentDay.main.temp);

  $("#renderSection").html("");
  // create a container, then contents of the container, add the contents inside the container, put the container on the page
  for (var i = 8; i < weatherData.list.length; i++) {

}



 // This .on("click") function will trigger the AJAX Call
 $("#find-weather").on("click", function(event) {

    event.preventDefault();
    // City name taken from input
    var cityName = $("#city-input").val();
    getLocation(cityName);

// Here we are building the URL we need to query the database based on city name

// get location 
});



// dt from object for time
var newDate = new Date(1675123200 *1000)

console.log(newDate)

// local storage to save searched cities 

// append into cards

