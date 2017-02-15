angular.module('forecast').
        service('forecastService', ['$http',
            function ($http) {
                this.apiKey = '32c84dac0157cab102f1f3e177d124bb';

                this.getCityForecast = function (city) {
                    var beforeCityQuery = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
                    var afterCityQuery = '&mode=json&units=metric&cnt=7&apikey=' + this.apiKey;

                    return $http.get(beforeCityQuery + city + afterCityQuery).then(function (result) {
                        return result.data;
                    });
                };

                this.getLatLonForecast = function (lat, lon) {
                    var beforeLatQuery = 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=';
                    var innerQuery = '&lon=';
                    var afterLonQuery = '&mode=json&units=metric&cnt=7&apikey=' + this.apiKey;

                    return $http.get(beforeLatQuery + lat + innerQuery + lon + afterLonQuery).then(function (result) {
                        return result.data;
                    });
                };
            }]);
