'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users',{
      id:{
        type: 'INTEGER',
        field: 'id',
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: 'VARCHAR',
        field: 'username',
        allowNull: false,
        unique: true
      },
      password: {
        type: 'VARCHAR',
        field: 'password',
        allowNull: false
      },
      email: {
        type: 'VARCHAR',
        field: 'email',
        allowNull: false,
        unique: true
      },
      gender: {
        type: 'VARCHAR',
        field: 'gender'
      },
      phone: {
        type: 'VARCHAR',
        field: 'phone'
      },
      created_at: {
        type: 'TIMESTAMPTZ',
        field: 'created_at'
      },
      updated: {
        type: 'TIMESTAMPTZ',
        field: 'updated_at'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};
