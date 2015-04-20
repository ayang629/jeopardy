'use strict';

// Games controller
angular.module('games').controller('GamesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Games', 'Questions', 'Topics',
	function($scope, $stateParams, $location, Authentication, Games, Questions, Topics) {
		$scope.authentication = Authentication;
		$scope.topics = [];
		// Create new Game
		$scope.create = function() {
			// Create new Game object
			var game = new Games ({
				name: this.name,
				topics: this.topics,
			});

			// Redirect after save, redirecting to specific created page
			game.$save(function(response) {
				$location.path('games/' + response._id); 

				// Clear form fields
				$scope.topics = [];
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Game
		$scope.remove = function(game) {
			if ( game ) { 
				game.$remove();

				for (var i in $scope.games) {
					if ($scope.games [i] === game) {
						$scope.games.splice(i, 1);
					}
				}
			} else {
				$scope.game.$remove(function() {
					$location.path('games');
				});
			}
		};

		// Update existing Game
		$scope.update = function() {
			var game = $scope.game;

			game.$update(function() {
				$location.path('games/' + game._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.addTopic = function(){
			var newTopic = new Topics(this.topicName);
			//Find three questions
			//
		};

		// Find a list of Games
		$scope.find = function() {
			$scope.games = Games.query();
		};

		// Find existing Game
		$scope.findOne = function() {
			$scope.game = Games.get({ 
				gameId: $stateParams.gameId
			});
		};
	}
]);