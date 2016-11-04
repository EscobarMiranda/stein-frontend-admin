(function() {
  'use strict';

  angular
    .module('app.admin')
    .controller('AdminUserController', AdminUserController);

  /* @ngInject */
  function AdminUserController($state, $uibModal, ngNotify) {
    var vm = this;
    vm.users = [];
    vm.createUser = createUser;
    vm.updateUser = updateUser;
    vm.deleteUser = deleteUser;

    function createUser() {
      $uibModal.open({
        templateUrl: 'app/components/admin/user/create/create.html',
        controller: 'CreateUserController as vm'
      });
    }

    function updateUser(user) {
      $uibModal.open({
        templateUrl: 'app/components/admin/user/update/update.html',
        controller: 'UpdateUserController as vm'
      });
    }

    function deleteUser(user) {
      $uibModal.open({
        templateUrl: 'app/components/admin/user/delete/delete.html',
        controller: 'DeleteUserController as vm'
      });
    }

  }

})();
