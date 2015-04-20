'use strict';

//Games service used to communicate Games REST endpoints
angular.module('games').factory('Games', ['$resource',
	function($resource) {
		return $resource('games/:gameId', { gameId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

angular.module('questions').factory('Questions', ['$resource',
	function($resource) {
		return $resource('games/:gameId', { gameId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

angular.module('topics').factory('Topics', ['$resource',
	function($resource) {
		return $resource('games/:gameId', { gameId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

// angular.module('players').factory('Games', ['$resource',
// 	function($resource) {
// 		return $resource('games/:gameId', { gameId: '@_id'
// 		}, {
// 			update: {
// 				method: 'PUT'
// 			}
// 		});
// 	}
// ]);

