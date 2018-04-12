/**
 * Adminpanel configuration
 */

module.exports.adminpanel = {
  instances: {
    car: {
      title: 'Car',
      model: 'Car',
      permission: 'carAdmin',
      add: {
        permission: 'carAdmin'
      },
      list: {
        permission: 'carAdmin'
      },
      edit: {
        permission: ['canEdit', 'carAdmin']
      },
      remove: {
        permission: '1234'
      }
    },
    user: {
      title: 'User',
      model: 'User'
    },
  },
  admin: {
    username: 'admin',
    password: 'admin'
  }
};
