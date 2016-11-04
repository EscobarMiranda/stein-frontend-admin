(function() {
  'use strict';

  angular
    .module('app.admin')
    .controller('CreateUserController', CreateUserController);

  /* @ngInject */
  function CreateUserController($uibModalInstance) {
    var vm = this;
    vm.close = close;

    function close() {
      $uibModalInstance.dismiss('cancel');
    }

  }

})();
