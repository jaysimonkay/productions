$('.current-city-weather').addClass('fadeInUp');


document.querySelector("#pulse").addEventListener('click', function () {
    var city = "Houston";
    var state = "Texas";
    // var API_Key = 'AIzaSyDf4-FPjN9B4j1XYcZzr5BKZLuL49H3QGw';

    var geocode_url = `http://api.openweathermap.org/data/2.5/forecast?q=london,uk&units=imperial&appid=df94466667a7ab65e92702a5d5e32e82`;

    // console.log(geocode_url);

    // convert unix UTC to date string
    function convertUTC(val){
        var newDate = new Date(val * 1000);
        dateString = newDate.toUTCString();
        return dateString;
    }
    var weather = function get_weather() {
        $.ajax({
            type: 'GET',
            url: geocode_url,
            error: function (jqXHR, textStatus, errorThrown) {
                // console.log(jqXHR);
            },
            success: function (geo_val) {
                // console.log(geo_val);
                data_list = geo_val.List;
                var weather_id = document.querySelector("#weather-body");
                        var weather_id2 = document.querySelector("#weather-body2");
                        var num = 0;
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
                    <h3 class="card-header current-city-weather">${full_data[num].temperature}<sup class="font-weight-light">o <sub>F</sub></sup> <span class="weather_colors">|</span> ${full_data[num].shortForecast}</h3>
                                                <img class="current-city-weather" style="margin: 0 auto;" width="150px;" src="${weather_icon_check`${full_data[num].shortForecast}`}" alt="Card image">
                                                <h4 class="current-city-weather px-0 weather_colors">${full_data[num].name}</h4>
                                                <h6 class="current-city-weather px-3 text-justify">${full_data[num].detailedForecast}</h6>
                                                <div class="card-footer">
                                                <div class="row">
                                                    <div class="col"> <i class="wi wi-strong-wind pr-2 weather_colors"></i><span class="value">${full_data[num].windSpeed}</span></div>
                                                    <div class="col"> <i class="wi wi-wind-default pr-2 weather_colors"></i><span class="value">${full_data[num].windDirection}</span></div>
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
                        
                        let alter_data = fdata.filter(function(element, index){
                            return index % 2 == 0;
                        });
                       
                        var weather_icon = " ";

                                weather_id2.innerHTML = `  
                                ${Array(6).join(0).split(0).map(function(item , i){
        
                                    if (alter_data[i].shortForecast.indexOf('Rain') !== -1) {
                                        weather_icon = './img/rain-clouds.png';
                                    } else if (alter_data[i].shortForecast.indexOf('Clear') !== -1) {
                                        weather_icon = './img/sun.png';
                                    } else if (alter_data[i].shortForecast.indexOf('Sunny') !== -1) {
                                        weather_icon = './img/sun.png';
                                    } else if (alter_data[i].shortForecast.indexOf('Cloudy') !== -1) {
                                        weather_icon = './img/sun-and-clouds.png';
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
    };              
weather();
});