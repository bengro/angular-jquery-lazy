
angular.module('directivesFunApp')
  .controller('LazyCtrl', function ($scope) {
    console.log('This is the lazy loading controller...');
    $scope.countSuccess = 0
    $scope.countFailures = 0;

    // overwriting options, be careful with bind,
    /*$scope.lazyOptions = {
      effect: 'show',
      effectTime: 2000
    };*/

    // listen for when images are loaded
    $scope.$on('ImgLazyLoaded', function(event, element) {
      console.log('Caught a ImgLazyLoaded event');
      ++$scope.countSuccess;
      $scope.$apply();
    });

    $scope.$on('ImgNotLazyLoaded', function(event, element) {
      console.log('Caught a ImgNotLazyLoaded event for element src=' + element[1]);
      ++$scope.countFailures;
      $scope.errors = 'Failed to load <strong>' + $scope.countFailures + '</strong> images.';
      $scope.$apply();
    });

  });
