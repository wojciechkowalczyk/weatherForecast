angular.module('forecastCharts').
        component('forecastCharts', {
            templateUrl: 'forecast-charts/forecast-charts.template.html',
            controller: ['$rootScope', '$scope',
                function forecastChartsController($rootScope, $scope) {
                    var self = this;

                    google.charts.load('current', {packages: ['corechart']});
                    //google.charts.setOnLoadCallback(populateCharts('{}'));


                    self.populateCharts = function (forecast) {
                        var forecastArray = angular.fromJson(forecast);
                        var cnt = forecastArray.cnt;
                        var list = new Array();
                        list = forecastArray.list;
                        city = forecastArray.city.name;

                        temperatureArrayHeader = ['Date', 'morning', 'day', 'evening', 'night', 'minimum', 'maximum'];
                        temperatureArray = new Array();
                        temperatureArray[0] = temperatureArrayHeader;

                        percentageArrayHeader = ['Date', 'humidity', 'clouds'];
                        percentageArray = new Array();
                        percentageArray[0] = percentageArrayHeader;
                        pressureArrayHeader = ['Date', 'pressure'];
                        pressureArray = new Array();
                        pressureArray[0] = pressureArrayHeader;

                        /*windArrayHeader = ['Date', 'humidity', 'clouds'];  
                         windArray = new Array();
                         windArray[0] = windArrayHeader;*/

                        for (i = 0; i < cnt; i++) {
                            temperatureArray[i + 1] = new Array();
                            temperatureArray[i + 1][0] = self.day(list[i].dt);
                            temperatureArray[i + 1][1] = list[i].temp.morn;
                            temperatureArray[i + 1][2] = list[i].temp.day;
                            temperatureArray[i + 1][3] = list[i].temp.eve;
                            temperatureArray[i + 1][4] = list[i].temp.night;
                            temperatureArray[i + 1][5] = list[i].temp.min;
                            temperatureArray[i + 1][6] = list[i].temp.max;
                            percentageArray[i + 1] = new Array();
                            percentageArray[i + 1][0] = self.day(list[i].dt);
                            percentageArray[i + 1][1] = list[i].humidity;
                            percentageArray[i + 1][2] = list[i].clouds;
                            pressureArray[i + 1] = new Array();
                            pressureArray[i + 1][0] = self.day(list[i].dt);
                            pressureArray[i + 1][1] = list[i].pressure;
                        }

                        self.drawTemperature(temperatureArray);
                        self.drawPercentageQuantities(percentageArray);
                        self.drawPressure(pressureArray);
                    };

                    self.drawTemperature = function (temperatureArray) {
                        var data = google.visualization.arrayToDataTable(temperatureArray);
                        var options = {
                            title: 'Temperature',
                            vAxis: {title: 'Celsius degrees'},
                            //hAxis: {title: 'Day'},
                            seriesType: 'bars',
                            series: {
                                4: {type: 'line'},
                                5: {type: 'line'}
                            }
                        };
                        var chart = new google.visualization.ComboChart(document.getElementById('temperature_chart'));
                        chart.draw(data, options);
                    };

                    self.drawPercentageQuantities = function (percentageArray) {
                        var data = google.visualization.arrayToDataTable(percentageArray);
                        var options = {
                            title: 'Humidity and Clouds',
                            vAxis: {title: 'percentages', titleTextStyle: {color: '#333'}},
                            //vAxis: {minValue: 0}
                        };
                        var chart = new google.visualization.AreaChart(document.getElementById('percentage_quantities_chart'));
                        chart.draw(data, options);
                    };

                    self.drawPressure = function (pressureArray) {
                        var data = google.visualization.arrayToDataTable(pressureArray);
                        var options = {
                            title: 'Pressure',
                            vAxis: {title: 'hPa', titleTextStyle: {color: '#333'}},
                            //vAxis: {minValue: 0}
                        };
                        var chart = new google.visualization.AreaChart(document.getElementById('pressure_chart'));
                        chart.draw(data, options);
                    };

                    self.day = function (unix_timestamp) {
                        var day = new Date(unix_timestamp * 1000);
                        var dd = day.getDate();
                        var mm = day.getMonth() + 1;
                        var yyyy = day.getFullYear();
                        if (dd < 10) {
                            dd = '0' + dd;
                        }
                        if (mm < 10) {
                            mm = '0' + mm;
                        }
                        var day = dd + '/' + mm + '/' + yyyy;
                        return day;
                    };

                    $scope.$on('populateCharts', function (event, args) {
                        self.populateCharts(args.forecast);
                    });
                }
            ]
        });
