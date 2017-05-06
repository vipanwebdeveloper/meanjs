(function () {
  'use strict';

  angular
    .module('admins')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Admins',
      state: 'admins',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'admins', {
      title: 'List Admins',
      state: 'admins.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'admins', {
      title: 'Create Admin',
      state: 'admins.create',
      roles: ['user']
    });
  }
}());
