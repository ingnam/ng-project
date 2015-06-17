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
			cover: 'img/book1.jpg'
		}, 
		{
			name: 'The song of ice and fire',
			price: 80,
			pubdate: new Date('2009', '03', '08'), 
			cover: 'img/book2.jpg'
		}
	];
}]);