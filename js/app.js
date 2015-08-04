var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
    $httpProvider.interceptors.push('httpRequestInterceptor');
    $routeProvider
        .when('/', {
            templateUrl: 'js/home/homeTmpl.html',
            controller: 'homeCtrl'
        })
        .when('/teams/:team', {
            templateUrl: '/Javascript/nbaRoutes/js/teams/teamTmpl.html',
            controller: 'teamCtrl',
            resolve: {
                teamData: function(teamService){
                    return teamService.getTeamData($route.current.params.team);
                }
            }
        })
        .otherwise({
            redirectTo: '/'
        })


});






