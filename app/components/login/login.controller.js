(function() {
  'use strict';

  angular
    .module('app.login')
    .controller('LoginController', LoginController);

  /* @ngInject */
  function LoginController(LoginService) {
    var vm = this;
    vm.login = login;

    function login() {
      LoginService.login();
    }

  }

})();
