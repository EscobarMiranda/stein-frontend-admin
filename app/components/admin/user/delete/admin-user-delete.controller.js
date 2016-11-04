(function() {
  'use strict';

  angular
    .module('app.admin')
    .controller('DeleteUserController', DeleteUserController);

  /* @ngInject */
  function DeleteUserController($uibModalInstance) {
    var vm = this;
    vm.close = close;

    function close() {
      $uibModalInstance.dismiss('cancel');
    }

  }

})();
