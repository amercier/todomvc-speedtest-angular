'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('todomvcSpeedtestAngular'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should define more than 5 awesome things', inject(function($controller) {
    expect(scope.todos).toBeUndefined();

    $controller('TodoCtrl', {
      $scope: scope
    });

    expect(angular.isArray(scope.todos)).toBeTruthy();
  }));
});
