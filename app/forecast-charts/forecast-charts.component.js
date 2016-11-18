angular.module('forecastCharts').
        component('forecastCharts', {
            templateUrl: 'forecast-charts/forecast-charts.template.html',
            controller: ['$rootScope', '$scope', 'forecastService',
                function forecastChartsController($rootScope, $scope, forecastService) {
//                    function handleResult() {
//                        var resultArray = jQuery.parseJSON(result);
//                        //console.log(resultArray); 
//                        var cnt = resultArray.cnt;
//                        var list = new Array();
//                        list = resultArray.list;
//                        //console.log(list); 
//                        city = resultArray.city.name;
//                        $("input:text").val(resultArray.city.name);
//                        placeCityMarker(resultArray.city.coord.lat, resultArray.city.coord.lon);
//                        temperatureArrayHeader = ['Date', 'morning', 'day', 'evening', 'night', 'minimum', 'maximum'];
//                        temperatureArray = new Array();
//                        temperatureArray[0] = temperatureArrayHeader;
//                        percentageArrayHeader = ['Date', 'humidity', 'clouds'];
//                        percentageArray = new Array();
//                        percentageArray[0] = percentageArrayHeader;
//                        pressureArrayHeader = ['Date', 'pressure'];
//                        pressureArray = new Array();
//                        pressureArray[0] = pressureArrayHeader;
//                        /*windArrayHeader = ['Date', 'humidity', 'clouds'];  
//                         windArray = new Array();
//                         windArray[0] = windArrayHeader;*/
//
//                        for (i = 0; i < cnt; i++) {
//                            temperatureArray[i + 1] = new Array();
//                            temperatureArray[i + 1][0] = day(list[i].dt);
//                            temperatureArray[i + 1][1] = list[i].temp.morn;
//                            temperatureArray[i + 1][2] = list[i].temp.day;
//                            temperatureArray[i + 1][3] = list[i].temp.eve;
//                            temperatureArray[i + 1][4] = list[i].temp.night;
//                            temperatureArray[i + 1][5] = list[i].temp.min;
//                            temperatureArray[i + 1][6] = list[i].temp.max;
//                            percentageArray[i + 1] = new Array();
//                            percentageArray[i + 1][0] = day(list[i].dt);
//                            percentageArray[i + 1][1] = list[i].humidity;
//                            percentageArray[i + 1][2] = list[i].clouds;
//                            pressureArray[i + 1] = new Array();
//                            pressureArray[i + 1][0] = day(list[i].dt);
//                            pressureArray[i + 1][1] = list[i].pressure;
//                        }
//
//                        //console.log(temperatureArray);
//
//                        /*drawVisualization();
//                         drawChart();
//                         $("#json_forecast").text(result);*/
//                    }
//
//                    function day(unix_timestamp) {
//                        var day = new Date(unix_timestamp * 1000);
//                        var dd = day.getDate();
//                        var mm = day.getMonth() + 1;
//                        var yyyy = day.getFullYear();
//                        if (dd < 10) {
//                            dd = '0' + dd;
//                        }
//                        if (mm < 10) {
//                            mm = '0' + mm;
//                        }
//                        var day = dd + '/' + mm + '/' + yyyy;
//                        return day;
//                    }
//
//                    function drawVisualization() {
//                        var combo_data = google.visualization.arrayToDataTable(temperatureArray);
//                        var options = {
//                            title: 'Temperature',
//                            vAxis: {title: 'Celsius degrees'},
//                            //hAxis: {title: 'Day'},
//                            seriesType: 'bars',
//                            series: {
//                                4: {type: 'line'},
//                                5: {type: 'line'}
//                            }
//                        };
//                        var combo_chart = new google.visualization.ComboChart(document.getElementById('combo_chart_div'));
//                        combo_chart.draw(combo_data, options);
//                    }
//
//                    function drawChart() {
//                        var data = google.visualization.arrayToDataTable(percentageArray);
//                        var options = {
//                            title: 'Humidity and Clouds',
//                            vAxis: {title: 'percentages', titleTextStyle: {color: '#333'}},
//                            //vAxis: {minValue: 0}
//                        };
//                        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
//                        chart.draw(data, options);
//                        var pressureData = google.visualization.arrayToDataTable(pressureArray);
//                        var pressureOptions = {
//                            title: 'Pressure',
//                            vAxis: {title: 'hPa', titleTextStyle: {color: '#333'}},
//                            //vAxis: {minValue: 0}
//                        };
//                        var pressureChart = new google.visualization.AreaChart(document.getElementById('pressure_chart_div'));
//                        pressureChart.draw(pressureData, pressureOptions);
//                    }
                    
                    $scope.$on('populateCharts', function (event, args) {
                        alert(angular.fromJson(args.forecast).city.name);
                    });

                }
            ]
        });
