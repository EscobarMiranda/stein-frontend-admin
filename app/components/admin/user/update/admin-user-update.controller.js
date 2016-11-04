(function() {
  'use strict';

  angular
    .module('app.admin')
    .controller('UpdateUserController', UpdateUserController);

  /* @ngInject */
  function UpdateUserController($uibModalInstance) {
    var vm = this;
    vm.close = close;

    function close() {
      $uibModalInstance.dismiss('cancel');
    }

  }

})();
