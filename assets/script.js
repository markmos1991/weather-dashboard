
 // APi Key
var APIKey = "f33f184931595a6e106cb189ecdd0a1b";
let lat = 0;
let lon = 0;

 // This .on("click") function will trigger the AJAX Call
 $("#find-weather").on("click", function(event) {

    event.preventDefault();
    // City name taken from input
    var cityName = $("#city-input").val();

// Here we are building the URL we need to query the database based on city name


   var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=" + APIKey;  
// returns response based on city name - lat lon
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
  
      let lat = response[0].lat.toFixed(2);
      let lon = response[0].lon.toFixed(2);
      console.log(response);
      console.log(response[0].lat);
      console.log(response[0].lon);
      console.log(lat);
      console.log(lon);
    


    //   second query for lat lon
      var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat; "&lon=" + lon; "&appid=9ee38f46bd8220a330649af11be415b2";

      $.ajax({
        url: queryURL2,
        method: "GET"
      }).then(function(response) {

        console.log(response);
    
  
  });
    

 })});
