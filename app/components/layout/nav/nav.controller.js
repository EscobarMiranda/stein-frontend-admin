(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('NavController', NavController);

  /* @ngInject */
  function NavController(LoginService, $state) {
    var vm = this;
    vm.isActive = isActive;

    function isActive(viewLocation) {
      return viewLocation === $state.current.name;
    }

    function logout() {
      LoginService.logout();
    }

  }
})();
