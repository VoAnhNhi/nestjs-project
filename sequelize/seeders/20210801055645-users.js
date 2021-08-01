'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users',[
      {
        id: 1,
        username: 'admin',
        password: 'admin',
        email: 'admin@phungStore.com',
        gender: 'Male',
        phone: '0123456789'
      }
    ],{})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users',null,{})
  }
};
