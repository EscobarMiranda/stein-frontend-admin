(function() {
  'use strict';

  angular
    .module('app.service')
    .service('LoginService', LoginService);

  /* @ngInject */
  function LoginService($state) {
    this.login = login;
    this.logout = logout;

    function login() {
      $state.go('home.dashboard');
    }

    function logout() {
      $state.go('login');
    }
  }

})();
