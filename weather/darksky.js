$('.current-city-weather').addClass('fadeInUp');


document.querySelector("#pulse").addEventListener('click', function () {
    var city = "Dallas";
    var state = "Texas";
    var API_Key = 'AIzaSyDf4-FPjN9B4j1XYcZzr5BKZLuL49H3QGw';

    var geocode_url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city},${state}&key=${API_Key}`;   
    var weather = function get_weather() {
        $.ajax({
            type: 'GET',
            url: geocode_url,
            error: function (jqXHR, textStatus, errorThrown) {
            },
            success: function (geo_val) {
            }
        }).done(function (geocode_val) {
            var lat = geocode_val.results[0].geometry.location.lat;
            var long = geocode_val.results[0].geometry.location.lng;
            var data_url = `https://api.darksky.net/forecast/${API_Key}/${lat},${long}`;
                $.ajax({
                    type: 'GET',
                    url: data_url,
                    error: function (jqXHR, textStatus, errorThrown) {
                    },
                    success: function (data) {

                        function convertUTC(utcnum){
                            // return gmt value
                            // new Date(utcnum * 1000).toUTCString();
                             // return time in location 300mins behind gmt
                            //  TODO: remove gmt behind value and convert to location time standards
                            return new Date((utcnum - (60 * 300) ) * 1000).toUTCString();

                        }

                        function convertBearing(bearing){
                            var val = Math.floor((bearing / 22.5) + 0.5);
                            var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
                            return arr[(val % 16)];

                            // alternate solution
                            // while( num < 0 ) num += 360 ;
                            // while( num >= 360 ) num -= 360 ; 
                            // val= Math.round( (num -11.25 ) / 22.5 ) ;
                            // arr=["N","NNE","NE","ENE","E","ESE", "SE", 
                            //       "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"] ;
                            // return arr[ Math.abs(val) ] ;
                        }
                        var weather_id = document.querySelector("#weather-body");
                        var weather_id2 = document.querySelector("#weather-body2");
                        // var num = 0;
                        function weather_icon_check(literal, short_forecast){                            
                            var weather_icon = " "; 
                            if(short_forecast.indexOf('Rain') != -1){
                                weather_icon = './img/rain-clouds.png';
                            }else if(short_forecast.indexOf('Clear') !== -1) {
                                weather_icon = './img/moon-and-clouds.png';
                            } else if (short_forecast.indexOf('Sunny') !== -1) {
                                weather_icon = './img/snow-clouds.png';
                            } else if (short_forecast.indexOf('Thunderstorms') !== -1) {
                                weather_icon = './img/stormrain-thunders.png';
                            } else {
                                weather_icon = './img/eclipse.png';
                            }
                            return `${weather_icon}`;
                        };
                        weather_id.innerHTML = `
                                <div class="col-md-6 py-3">
                                    <div class="row">
                                        <div class="col-12 pb-2">
                                            <div class="card transp text-center">
                    <h3 class="card-header current-city-weather">${data.currently.temperature}<sup class="font-weight-light">o <sub>F</sub></sup> <span class="weather_colors">|</span> ${data.currently.summary}</h3>
                                                <img class="current-city-weather" style="margin: 0 auto;" width="150px;" src="${weather_icon_check`${data.minutely.summary}`}" alt="Card image">
                                                <h4 class="current-city-weather px-0 weather_colors">${convertUTC`${data.currently.time}`}</h4>
                                                <h6 class="current-city-weather px-3 text-justify">new info</h6>
                                                <div class="card-footer">
                                                <div class="row">
                                                    <div class="col"> <i class="wi wi-strong-wind pr-2 weather_colors"></i><span class="value">${data.currently.windSpeed}</span></div>
                                                    <div class="col"> <i class="wi wi-wind-default pr-2 weather_colors"></i><span class="value">${convertBearing`${data.currently.windBearing}`}"</span></div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row no-gutters">
                                                <div class="col-4 sm-days">
                                                    <div class="card transp text-center">
                                                        <h6 class="card-header hc px-0">${full_data[num+1].name}</h6>
                                                        <img class="current-city-weather" style="margin: 0 auto;" width="80px;" src="${weather_icon_check`${full_data[num+1].shortForecast}`}"
                                                            alt="Card image">
                                                        <div class="card-footer">
                                                        ${full_data[num+1].temperature}<sup>o<sub>F</sub></sup>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-4 sm-days">
                                                    <div class="card transp text-center">
                                                        <h6 class="card-header hc px-0">${full_data[num+2].name}</h6>
                                                        <img class="current-city-weather" style="margin: 0 auto;" width="80px;" src="${weather_icon_check`${full_data[num+2].shortForecast}`}"
                                                            alt="Card image">
                                                        <div class="card-footer">
                                                        ${full_data[num+2].temperature}<sup>o<sub>F</sub></sup>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-4 sm-days">
                                                    <div class="card transp text-center">
                                                        <h6 class="card-header hc">${full_data[num+3].name}</h6>
                                                        <img class="current-city-weather" style="margin: 0 auto;" width="80px;" src="${weather_icon_check`${full_data[num+3].shortForecast}`}"
                                                            alt="Card image">
                                                        <div class="card-footer">
                                                        ${full_data[num+3].temperature}<sup>o <sub>F</sub></sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 text-right text-white">
                                    <span class="loc">${city}, ${state}</span>
                                        <img style="margin: 0 auto;" width="120px;" src="./img/sun.png" alt="Card image"> 
                                        <h4></h4> 
                                </div>`;

                        // create handler to return day values only using name values
                        var fdata;
                        switch (full_data[0].name) {
                            case 'This Afternoon':
                                fdata = full_data.slice(2);
                                break;
                            case 'Tonight':
                                fdata = full_data.slice(1);
                                break;
                            case 'Today':
                                fdata = full_data.slice(2);
                                break;
                            default:
                                fdata = full_data[0];
                        }

                        `${Array(5).join(0).split.filter(function(item, i){

                        }).join('')};`
                        

                        // return alternate indices
                        let alter_data = fdata.filter(function(element, index){
                            return index % 2 == 0;
                        });
                       
                        var weather_icon = " ", dayTime = " ";
                        weather_id2.innerHTML = `  
                        ${Array(6).join(0).split(0).map(function(item , i){

                            if (alter_data[i].shortForecast.indexOf('Rain') !== -1) {
                                weather_icon = './img/rain-clouds.png';
                            } else if (alter_data[i].shortForecast.indexOf('Clear') !== -1) {
                                weather_icon = './img/sun.png';
                            } else if (alter_data[i].shortForecast.indexOf('Sunny') !== -1) {
                                weather_icon = './img/sun.png';
                            } else if (alter_data[i].shortForecast.indexOf('Thunderstorms') !== -1) {
                                weather_icon = './img/stormrain-thunders.png';
                            } else {
                                weather_icon = './img/sun.png';
                            }

                            return `
                        <div class="col-md-2 sm-days pb-3">
                            <div class="card transp text-center">
                                <h5 class="card-header hc px-0">${alter_data[i].name}</h5>
                                <img class="current-city-weather" style="margin: 0 auto;" width="120px;" src="${weather_icon}" alt="Card image">
                                <div class="card-footer">
                                    <h3> ${alter_data[i].temperature}<sup class="font-weight-light">o <sub>F</sub></sup></h3>   
                                </div>
                            </div>
                        </div> `}).join('')};`
                        $('.current-city-weather').addClass('fadeInUp');
                    }
                });
            // });
        });
    };
    weather();
});