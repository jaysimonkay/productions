// "http://api.openweathermap.org/data/2.5/forecast?q=london,uk&units=imperial&appid=df94466667a7ab65e92702a5d5e32e82"

// q={city},{country}&units={imperial,metric}&appid=1234

// us = imperial
// uk = metric

// dt -> UTC : Sun, 07 Apr 2019 00:00:00 GMT


exports.val = function( ){
    return data_val;
};

data_val = 

{
    "cod": "200",
    "message": 0.0096,
    "cnt": 40,
    "list": [{
        "dt": 1554595200,
        "main": {
            "temp": 42.4,
            "temp_min": 41.78,
            "temp_max": 42.4,
            "pressure": 1006.64,
            "sea_level": 1006.64,
            "grnd_level": 999.13,
            "humidity": 97,
            "temp_kf": 0.34
        },
        "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "02n"
        }],
        "clouds": {
            "all": 8
        },
        "wind": {
            "speed": 7.65,
            "deg": 46.0034
        },
        "rain": {},
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-04-07 00:00:00"
    }, {
        "dt": 1554606000,
        "main": {
            "temp": 41.16,
            "temp_min": 40.71,
            "temp_max": 41.16,
            "pressure": 1006.71,
            "sea_level": 1006.71,
            "grnd_level": 999.19,
            "humidity": 100,
            "temp_kf": 0.26
        },
        "weather": [{
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
        }],
        "clouds": {
            "all": 36
        },
        "wind": {
            "speed": 6.96,
            "deg": 40.0035
        },
        "rain": {},
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-04-07 03:00:00"
    }, {
        "dt": 1554616800,
        "main": {
            "temp": 42.4,
            "temp_min": 42.09,
            "temp_max": 42.4,
            "pressure": 1007.52,
            "sea_level": 1007.52,
            "grnd_level": 999.89,
            "humidity": 98,
            "temp_kf": 0.17
        },
        "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }],
        "clouds": {
            "all": 76
        },
        "wind": {
            "speed": 7.18,
            "deg": 38.5029
        },
        "rain": {
            "3h": 0.01
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-04-07 06:00:00"
    }, {
        "dt": 1554627600,
        "main": {
            "temp": 48.6,
            "temp_min": 48.44,
            "temp_max": 48.6,
            "pressure": 1008.23,
            "sea_level": 1008.23,
            "grnd_level": 1000.74,
            "humidity": 87,
            "temp_kf": 0.09
        },
        "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }],
        "clouds": {
            "all": 92
        },
        "wind": {
            "speed": 5.86,
            "deg": 27.5004
        },
        "rain": {
            "3h": 0.03
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-04-07 09:00:00"
    }, {
        "dt": 1554638400,
        "main": {
            "temp": 52.42,
            "temp_min": 52.42,
            "temp_max": 52.42,
            "pressure": 1008.2,
            "sea_level": 1008.2,
            "grnd_level": 1000.75,
            "humidity": 84,
            "temp_kf": 0
        },
        "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }],
        "clouds": {
            "all": 92
        },
        "wind": {
            "speed": 6.08,
            "deg": 7.50607
        },
        "rain": {
            "3h": 0.845
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-04-07 12:00:00"
    }, {
        "dt": 1554649200,
        "main": {
            "temp": 56.24,
            "temp_min": 56.24,
            "temp_max": 56.24,
            "pressure": 1007.38,
            "sea_level": 1007.38,
            "grnd_level": 1000.05,
            "humidity": 78,
            "temp_kf": 0
        },
        "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }],
        "clouds": {
            "all": 76
        },
        "wind": {
            "speed": 6.85,
            "deg": 4.00104
        },
        "rain": {
            "3h": 0.12
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-04-07 15:00:00"
    }, {
        "dt": 1554660000,
        "main": {
            "temp": 58.44,
            "temp_min": 58.44,
            "temp_max": 58.44,
            "pressure": 1007.19,
            "sea_level": 1007.19,
            "grnd_level": 999.76,
            "humidity": 75,
            "temp_kf": 0
        },
        "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }],
        "clouds": {
            "all": 32
        },
        "wind": {
            "speed": 4.27,
            "deg": 57.5037
        },
        "rain": {
            "3h": 0.0050000000000001
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-04-07 18:00:00"
    }, {
        "dt": 1554670800,
        "main": {
            "temp": 49.37,
            "temp_min": 49.37,
            "temp_max": 49.37,
            "pressure": 1008.26,
            "sea_level": 1008.26,
            "grnd_level": 1000.85,
            "humidity": 86,
            "temp_kf": 0
        },
        "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }],
        "clouds": {
            "all": 0
        },
        "wind": {
            "speed": 5.37,
            "deg": 85.0008
        },
        "rain": {},
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-04-07 21:00:00"
    }, {
        "dt": 1554681600,
        "main": {
            "temp": 42.38,
            "temp_min": 42.38,
            "temp_max": 42.38,
            "pressure": 1008.39,
            "sea_level": 1008.39,
            "grnd_level": 1000.76,
            "humidity": 90,
            "temp_kf": 0
        },
        "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "02n"
        }],
        "clouds": {
            "all": 8
        },
        "wind": {
            "speed": 3.76,
            "deg": 28.5068
        },
        "rain": {},
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-04-08 00:00:00"
    }, {
        "dt": 1554692400,
        "main": {
            "temp": 38.36,
            "temp_min": 38.36,
            "temp_max": 38.36,
            "pressure": 1008.43,
            "sea_level": 1008.43,
            "grnd_level": 1000.83,
            "humidity": 91,
            "temp_kf": 0
        },
        "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }],
        "clouds": {
            "all": 0
        },
        "wind": {
            "speed": 2.48,
            "deg": 56.0005
        },
        "rain": {},
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-04-08 03:00:00"
    }, {
        "dt": 1554703200,
        "main": {
            "temp": 37.36,
            "temp_min": 37.36,
            "temp_max": 37.36,
            "pressure": 1008.94,
            "sea_level": 1008.94,
            "grnd_level": 1001.28,
            "humidity": 89,
            "temp_kf": 0
        },
        "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }],
        "clouds": {
            "all": 0
        },
        "wind": {
            "speed": 2.37,
            "deg": 75.002
        },
        "rain": {
            "3h": 0.0049999999999999
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-04-08 06:00:00"
    }, {
        "dt": 1554714000,
        "main": {
            "temp": 52.29,
            "temp_min": 52.29,
            "temp_max": 52.29,
            "pressure": 1009.54,
            "sea_level": 1009.54,
            "grnd_level": 1002.1,
            "humidity": 82,
            "temp_kf": 0
        },
        "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }],
        "clouds": {
            "all": 48
        },
        "wind": {
            "speed": 2.95,
            "deg": 184.504
        },
        "rain": {
            "3h": 0.025
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-04-08 09:00:00"
    }, {
        "dt": 1554724800,
        "main": {
            "temp": 58.5,
            "temp_min": 58.5,
            "temp_max": 58.5,
            "pressure": 1009.57,
            "sea_level": 1009.57,
            "grnd_level": 1002.18,
            "humidity": 77,
            "temp_kf": 0
        },
        "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }],
        "clouds": {
            "all": 44
        },
        "wind": {
            "speed": 3.76,
            "deg": 86.0031
        },
        "rain": {
            "3h": 0.0050000000000001
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-04-08 12:00:00"
    }, {
        "dt": 1554735600,
        "main": {
            "temp": 60.29,
            "temp_min": 60.29,
            "temp_max": 60.29,
            "pressure": 1009.36,
            "sea_level": 1009.36,
            "grnd_level": 1001.86,
            "humidity": 74,
            "temp_kf": 0
        },
        "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }],
        "clouds": {
            "all": 76
        },
        "wind": {
            "speed": 4.63,
            "deg": 121.003
        },
        "rain": {
            "3h": 0.425
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-04-08 15:00:00"
    }, {
        "dt": 1554746400,
        "main": {
            "temp": 57.72,
            "temp_min": 57.72,
            "temp_max": 57.72,
            "pressure": 1009.88,
            "sea_level": 1009.88,
            "grnd_level": 1002.47,
            "humidity": 78,
            "temp_kf": 0
        },
        "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }],
        "clouds": {
            "all": 64
        },
        "wind": {
            "speed": 4,
            "deg": 130.001
        },
        "rain": {
            "3h": 2.01
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-04-08 18:00:00"
    }, {
        "dt": 1554757200,
        "main": {
            "temp": 51.89,
            "temp_min": 51.89,
            "temp_max": 51.89,
            "pressure": 1011.12,
            "sea_level": 1011.12,
            "grnd_level": 1003.72,
            "humidity": 86,
            "temp_kf": 0
        },
        "weather": [{
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
        }],
        "clouds": {
            "all": 36
        },
        "wind": {
            "speed": 6.8,
            "deg": 83.0014
        },
        "rain": {},
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-04-08 21:00:00"
    }, {
        "dt": 1554768000,
        "main": {
            "temp": 47.38,
            "temp_min": 47.38,
            "temp_max": 47.38,
            "pressure": 1011.52,
            "sea_level": 1011.52,
            "grnd_level": 1004.1,
            "humidity": 86,
            "temp_kf": 0
        },
        "weather": [{
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
        }],
        "clouds": {
            "all": 56
        },
        "wind": {
            "speed": 6.4,
            "deg": 58.5002
        },
        "rain": {},
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-04-09 00:00:00"
    }, {
        "dt": 1554778800,
        "main": {
            "temp": 46.81,
            "temp_min": 46.81,
            "temp_max": 46.81,
            "pressure": 1011.41,
            "sea_level": 1011.41,
            "grnd_level": 1003.87,
            "humidity": 91,
            "temp_kf": 0
        },
        "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
        }],
        "clouds": {
            "all": 76
        },
        "wind": {
            "speed": 7.63,
            "deg": 54.5005
        },
        "rain": {
            "3h": 0.015
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-04-09 03:00:00"
    }, {
        "dt": 1554789600,
        "main": {
            "temp": 48.35,
            "temp_min": 48.35,
            "temp_max": 48.35,
            "pressure": 1011.92,
            "sea_level": 1011.92,
            "grnd_level": 1004.46,
            "humidity": 86,
            "temp_kf": 0
        },
        "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }],
        "clouds": {
            "all": 76
        },
        "wind": {
            "speed": 9.84,
            "deg": 68.0011
        },
        "rain": {
            "3h": 0.015
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-04-09 06:00:00"
    }, {
        "dt": 1554800400,
        "main": {
            "temp": 52.45,
            "temp_min": 52.45,
            "temp_max": 52.45,
            "pressure": 1012.52,
            "sea_level": 1012.52,
            "grnd_level": 1005.07,
            "humidity": 77,
            "temp_kf": 0
        },
        "weather": [{
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
        }],
        "clouds": {
            "all": 64
        },
        "wind": {
            "speed": 12.44,
            "deg": 69.0003
        },
        "rain": {},
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-04-09 09:00:00"
    }, {
        "dt": 1554811200,
        "main": {
            "temp": 54.3,
            "temp_min": 54.3,
            "temp_max": 54.3,
            "pressure": 1012.67,
            "sea_level": 1012.67,
            "grnd_level": 1005.27,
            "humidity": 74,
            "temp_kf": 0
        },
        "weather": [{
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
        }],
        "clouds": {
            "all": 48
        },
        "wind": {
            "speed": 13.42,
            "deg": 65.0006
        },
        "rain": {},
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-04-09 12:00:00"
    }, {
        "dt": 1554822000,
        "main": {
            "temp": 55.67,
            "temp_min": 55.67,
            "temp_max": 55.67,
            "pressure": 1012.18,
            "sea_level": 1012.18,
            "grnd_level": 1004.72,
            "humidity": 67,
            "temp_kf": 0
        },
        "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }],
        "clouds": {
            "all": 0
        },
        "wind": {
            "speed": 13.47,
            "deg": 57.0091
        },
        "rain": {},
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-04-09 15:00:00"
    }, {
        "dt": 1554832800,
        "main": {
            "temp": 50.84,
            "temp_min": 50.84,
            "temp_max": 50.84,
            "pressure": 1012.43,
            "sea_level": 1012.43,
            "grnd_level": 1004.91,
            "humidity": 61,
            "temp_kf": 0
        },
        "weather": [{
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
        }],
        "clouds": {
            "all": 36
        },
        "wind": {
            "speed": 12.46,
            "deg": 51.5049
        },
        "rain": {},
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-04-09 18:00:00"
    }, {
        "dt": 1554843600,
        "main": {
            "temp": 46.81,
            "temp_min": 46.81,
            "temp_max": 46.81,
            "pressure": 1013.3,
            "sea_level": 1013.3,
            "grnd_level": 1005.71,
            "humidity": 63,
            "temp_kf": 0
        },
        "weather": [{
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
        }],
        "clouds": {
            "all": 32
        },
        "wind": {
            "speed": 12.77,
            "deg": 50.5013
        },
        "rain": {},
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-04-09 21:00:00"
    }, {
        "dt": 1554854400,
        "main": {
            "temp": 46.07,
            "temp_min": 46.07,
            "temp_max": 46.07,
            "pressure": 1013.53,
            "sea_level": 1013.53,
            "grnd_level": 1006.01,
            "humidity": 65,
            "temp_kf": 0
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }],
        "clouds": {
            "all": 88
        },
        "wind": {
            "speed": 12.77,
            "deg": 49.5063
        },
        "rain": {},
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-04-10 00:00:00"
    }, {
        "dt": 1554865200,
        "main": {
            "temp": 46.42,
            "temp_min": 46.42,
            "temp_max": 46.42,
            "pressure": 1013.44,
            "sea_level": 1013.44,
            "grnd_level": 1005.88,
            "humidity": 64,
            "temp_kf": 0
        },
        "weather": [{
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
        }],
        "clouds": {
            "all": 76
        },
        "wind": {
            "speed": 12.41,
            "deg": 54.0023
        },
        "rain": {},
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-04-10 03:00:00"
    }, {
        "dt": 1554876000,
        "main": {
            "temp": 44.88,
            "temp_min": 44.88,
            "temp_max": 44.88,
            "pressure": 1013.84,
            "sea_level": 1013.84,
            "grnd_level": 1006.28,
            "humidity": 70,
            "temp_kf": 0
        },
        "weather": [{
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
        }],
        "clouds": {
            "all": 32
        },
        "wind": {
            "speed": 11.92,
            "deg": 51.5031
        },
        "rain": {},
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-04-10 06:00:00"
    }, {
        "dt": 1554886800,
        "main": {
            "temp": 49.63,
            "temp_min": 49.63,
            "temp_max": 49.63,
            "pressure": 1014.59,
            "sea_level": 1014.59,
            "grnd_level": 1007.08,
            "humidity": 66,
            "temp_kf": 0
        },
        "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "02d"
        }],
        "clouds": {
            "all": 8
        },
        "wind": {
            "speed": 12.68,
            "deg": 56.5027
        },
        "rain": {},
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-04-10 09:00:00"
    }, {
        "dt": 1554897600,
        "main": {
            "temp": 51.66,
            "temp_min": 51.66,
            "temp_max": 51.66,
            "pressure": 1015,
            "sea_level": 1015,
            "grnd_level": 1007.56,
            "humidity": 60,
            "temp_kf": 0
        },
        "weather": [{
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
        }],
        "clouds": {
            "all": 24
        },
        "wind": {
            "speed": 12.75,
            "deg": 67
        },
        "rain": {},
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-04-10 12:00:00"
    }, {
        "dt": 1554908400,
        "main": {
            "temp": 52.99,
            "temp_min": 52.99,
            "temp_max": 52.99,
            "pressure": 1014.87,
            "sea_level": 1014.87,
            "grnd_level": 1007.36,
            "humidity": 50,
            "temp_kf": 0
        },
        "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }],
        "clouds": {
            "all": 0
        },
        "wind": {
            "speed": 11.99,
            "deg": 64.0008
        },
        "rain": {},
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-04-10 15:00:00"
    }, {
        "dt": 1554919200,
        "main": {
            "temp": 49.55,
            "temp_min": 49.55,
            "temp_max": 49.55,
            "pressure": 1015.44,
            "sea_level": 1015.44,
            "grnd_level": 1007.86,
            "humidity": 45,
            "temp_kf": 0
        },
        "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }],
        "clouds": {
            "all": 0
        },
        "wind": {
            "speed": 10.76,
            "deg": 63.0067
        },
        "rain": {},
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-04-10 18:00:00"
    }, {
        "dt": 1554930000,
        "main": {
            "temp": 43.04,
            "temp_min": 43.04,
            "temp_max": 43.04,
            "pressure": 1017,
            "sea_level": 1017,
            "grnd_level": 1009.34,
            "humidity": 58,
            "temp_kf": 0
        },
        "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }],
        "clouds": {
            "all": 0
        },
        "wind": {
            "speed": 9.69,
            "deg": 56.5039
        },
        "rain": {},
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-04-10 21:00:00"
    }, {
        "dt": 1554940800,
        "main": {
            "temp": 38.46,
            "temp_min": 38.46,
            "temp_max": 38.46,
            "pressure": 1017.34,
            "sea_level": 1017.34,
            "grnd_level": 1009.72,
            "humidity": 71,
            "temp_kf": 0
        },
        "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }],
        "clouds": {
            "all": 0
        },
        "wind": {
            "speed": 8.19,
            "deg": 33.0012
        },
        "rain": {},
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-04-11 00:00:00"
    }, {
        "dt": 1554951600,
        "main": {
            "temp": 35.72,
            "temp_min": 35.72,
            "temp_max": 35.72,
            "pressure": 1016.91,
            "sea_level": 1016.91,
            "grnd_level": 1009.16,
            "humidity": 84,
            "temp_kf": 0
        },
        "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }],
        "clouds": {
            "all": 0
        },
        "wind": {
            "speed": 7.96,
            "deg": 21.0018
        },
        "rain": {},
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-04-11 03:00:00"
    }, {
        "dt": 1554962400,
        "main": {
            "temp": 35.23,
            "temp_min": 35.23,
            "temp_max": 35.23,
            "pressure": 1016.74,
            "sea_level": 1016.74,
            "grnd_level": 1008.98,
            "humidity": 93,
            "temp_kf": 0
        },
        "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }],
        "clouds": {
            "all": 0
        },
        "wind": {
            "speed": 7.81,
            "deg": 20.0001
        },
        "rain": {},
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-04-11 06:00:00"
    }, {
        "dt": 1554973200,
        "main": {
            "temp": 48.9,
            "temp_min": 48.9,
            "temp_max": 48.9,
            "pressure": 1016.89,
            "sea_level": 1016.89,
            "grnd_level": 1009.32,
            "humidity": 63,
            "temp_kf": 0
        },
        "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }],
        "clouds": {
            "all": 0
        },
        "wind": {
            "speed": 6.8,
            "deg": 46.0002
        },
        "rain": {},
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-04-11 09:00:00"
    }, {
        "dt": 1554984000,
        "main": {
            "temp": 53.42,
            "temp_min": 53.42,
            "temp_max": 53.42,
            "pressure": 1016.55,
            "sea_level": 1016.55,
            "grnd_level": 1009.12,
            "humidity": 55,
            "temp_kf": 0
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }],
        "clouds": {
            "all": 88
        },
        "wind": {
            "speed": 9.66,
            "deg": 78.0012
        },
        "rain": {},
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-04-11 12:00:00"
    }, {
        "dt": 1554994800,
        "main": {
            "temp": 53.99,
            "temp_min": 53.99,
            "temp_max": 53.99,
            "pressure": 1016.09,
            "sea_level": 1016.09,
            "grnd_level": 1008.54,
            "humidity": 50,
            "temp_kf": 0
        },
        "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }],
        "clouds": {
            "all": 0
        },
        "wind": {
            "speed": 9.53,
            "deg": 77.5004
        },
        "rain": {},
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-04-11 15:00:00"
    }, {
        "dt": 1555005600,
        "main": {
            "temp": 49.88,
            "temp_min": 49.88,
            "temp_max": 49.88,
            "pressure": 1016.5,
            "sea_level": 1016.5,
            "grnd_level": 1008.87,
            "humidity": 49,
            "temp_kf": 0
        },
        "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }],
        "clouds": {
            "all": 0
        },
        "wind": {
            "speed": 9.78,
            "deg": 78.0014
        },
        "rain": {},
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-04-11 18:00:00"
    }, {
        "dt": 1555016400,
        "main": {
            "temp": 42.5,
            "temp_min": 42.5,
            "temp_max": 42.5,
            "pressure": 1017.49,
            "sea_level": 1017.49,
            "grnd_level": 1009.89,
            "humidity": 66,
            "temp_kf": 0
        },
        "weather": [{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }],
        "clouds": {
            "all": 0
        },
        "wind": {
            "speed": 8.34,
            "deg": 68.5022
        },
        "rain": {},
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-04-11 21:00:00"
    }],
    "city": {
        "id": 2643743,
        "name": "London",
        "coord": {
            "lat": 51.5085,
            "lon": -0.1258
        },
        "country": "GB",
        "population": 1000000
    }
};