angular.module('forecast')
    .service('forecastService', ['$http', function ($http) {

        this.getCityForecast = function (city) {
            var result;

            $.ajax({
                async: false, 
                url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&mode=json&units=metric&cnt=7&apikey=80e6daa3a673115878aba8e33628330e',
                dataType:'text',
                success: function(response) {
                    result = response;
                }
            });

            return result;
            //return $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&mode=json&units=metric&cnt=7&apikey=80e6daa3a673115878aba8e33628330e');
            /*return $http({
                url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&mode=json&units=metric&cnt=7&apikey=80e6daa3a673115878aba8e33628330e',
                method: 'GET',
                responseType: 'text',
                transformResponse: [function (data) {
                    // Do whatever you want!
                    return data;
                }]
            });*/
        };

        this.getLatLonForecast = function (lat, lon) {
            /*var result;

            $.ajax({
                async: false, 
                url: 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + lat + '&lon=' + lon + '&mode=json&units=metric&cnt=7&apikey=80e6daa3a673115878aba8e33628330e',
                dataType:'text',
                success: function(response) {
                    result = response;
                }
            });

            return result;*/
            return $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + lat + '&lon=' + lon + '&mode=json&units=metric&cnt=7&apikey=80e6daa3a673115878aba8e33628330e');
        };
    }]);
