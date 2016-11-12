angular.module('forecast')
    .service('forecastService', ['$http', function ($http) {

        this.getForecast = function getForecast(city) {
            alert(this.getCityForecast(city));
        };

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

        var urlBase = '/api/customers';

        this.getCustomers = function () {
            return $http.get(urlBase);
        };

        this.getCustomer = function (id) {
            return $http.get(urlBase + '/' + id);
        };

        this.insertCustomer = function (cust) {
            return $http.post(urlBase, cust);
        };

        this.updateCustomer = function (cust) {
            return $http.put(urlBase + '/' + cust.ID, cust)
        };

        this.deleteCustomer = function (id) {
            return $http.delete(urlBase + '/' + id);
        };

        this.getOrders = function (id) {
            return $http.get(urlBase + '/' + id + '/orders');
        };
    }]);
