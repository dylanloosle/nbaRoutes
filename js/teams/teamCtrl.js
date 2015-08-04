var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){
    $scope.teamData = teamData;
    console.log(teamData);
    $scope.newGame = {
        homeTeam: $scope.homeTeam.split(' ').join('').toLowerCase(),
        submitGame: addNewGame().then(function(){
            getTeamData($scope.newGame.homeTeam).then(function(data){
                $scope.teamData = data;
                $scope.newGame = {};
                $scope.showNewGameForm = false;
            })
        })
    };

    $scope.showNewGameForm = false;
    $scope.toggleNewGameForm = function() {
        if($scope.showNewGameForm === false){
            $scope.showNewGameForm = true;
        }
        else if($scope.showNewGameForm === true){
            $scope.showNewGameForm = false;
        }
    };
    if($routeParams.team === 'utahjazz'){
        $scope.homeTeam = 'Utah Jazz';
        $scope.logoPath = 'images/jazz-logo.png';
    }
    else if($routeParams.team === 'losangeleslakers'){
        $scope.homeTeam = 'Los Angeles Lakers';
        $scope.logoPath = 'images/lakers-logo.png';
    }
    else if($routeParams.team === 'miamiheat') {
        $scope.homeTeam = 'Miami Heat';
        $scope.logoPath = 'images/heat-logo.png';
    }



});