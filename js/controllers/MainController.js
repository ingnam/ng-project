app.controller('MainController', ['$scope', function($scope) {
	$scope.title = "I'm awesome";
	$scope.promo = "Books you must read";

	$scope.single_product = {
		name: 'The song of ice and fire',
		price: 50, 
		pubdate: new Date('2014', '03', '05')
	};

	$scope.products = [
		{
			name: 'The song of ice and fire',
			price: 80,
			pubdate: new Date('2009', '03', '08'), 
			cover: 'img/book1.jpg',
			likes: 0,
			dislikes: 0
		}, 
		{
			name: 'The song of ice and fire',
			price: 80,
			pubdate: new Date('2009', '03', '08'), 
			cover: 'img/book2.jpg',
			likes: 0,
			dislikes: 0
		}
	];

	$scope.plusOne = function(index) {
		$scope.products[index].likes += 1; 
	};

	$scope.minusOne = function(index) {
		$scope.products[index].dislikes += 1;
	};
	
	//for mobile app market
	$scope.move = {
		icon: 'img/move.jpg',
		title: 'MOVE',
		developer: 'MOVE, Inc.',
		price: 0.99
	};

	$scope.shutterbugg = {
		icon: 'img/shutterbugg.jpg',
		title: 'Shutterbugg',
		developer: 'Chico Dusty',
		price: 2.99
	};

	$scope.gameboard = {
		icon: 'img/gameboard.jpg',
		title: 'Gameboard',
		developer: 'Armando P.',
		price: 1.99
	};

	$scope.apps = [
		{
			icon: 'img/move.jpg',
			title: 'MOVE',
			developer: 'MOVE, Inc.',
			price: 0.99
		},
		{
			icon: 'img/shutterbugg.jpg',
			title: 'MOVE',
			developer: 'MOVE, Inc.',
			price: 0.99
		},
		{
			icon: 'img/gameboard.jpg',
			title: 'MOVE',
			developer: 'MOVE, Inc.',
			price: 0.99
		},
		{
			icon: 'img/move.jpg',
			title: 'MOVE',
			developer: 'MOVE, Inc.',
			price: 0.99
		}
	];
}]);