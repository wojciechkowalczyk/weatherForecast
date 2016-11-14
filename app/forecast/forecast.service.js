angular.module('forecast').
        service('forecastService', ['$http',
            function ($http) {
                this.apiKey = '80e6daa3a673115878aba8e33628330e';

                this.getCityForecast = function (city) {
                    var beforeCityQuery = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
                    var afterCityQuery = '&mode=json&units=metric&cnt=7&apikey=' + this.apiKey;
                    var result;

                    //alert($http.get(beforeCityQuery + city + afterCityQuery));

                    $.ajax({
                        async: false,
                        url: beforeCityQuery + city + afterCityQuery,
                        dataType: 'text',
                        success: function (response) {
                            result = response;
                        }
                    });

                    return result;

                    //return $http.get(beforeCityQuery + city + afterCityQuery);
                    /*return $http({
                     url: beforeCityQuery + city + afterCityQuery,
                     method: 'GET',
                     responseType: 'text',
                     transformResponse: [function (data) {
                     // Do whatever you want!
                     return data;
                     }]
                     });*/
                };

                this.getLatLonForecast = function (lat, lon) {
                    var beforeLatQuery = 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=';
                    var innerQuery = '&lon=';
                    var afterLonQuery = '&mode=json&units=metric&cnt=7&apikey=' + this.apiKey;
                    /*var result;
                     
                     $.ajax({
                     async: false, 
                     url: beforeLatQuery + lat + innerQuery + lon + afterLonQuery,
                     dataType:'text',
                     success: function(response) {
                     result = response;
                     }
                     });
                     
                     return result;*/
                    return $http.get(beforeLatQuery + lat + innerQuery + lon + afterLonQuery);
                };
            }]);
