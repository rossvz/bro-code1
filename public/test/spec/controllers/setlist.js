'use strict';

describe('Controller: SetlistCtrl', function () {

  // load the controller's module
  beforeEach(module('brocodiusApp'));

  var SetlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SetlistCtrl = $controller('SetlistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SetlistCtrl.awesomeThings.length).toBe(3);
  });
});
