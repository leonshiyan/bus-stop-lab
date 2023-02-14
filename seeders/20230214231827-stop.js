'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const date = new Date()

    await queryInterface.bulkInsert('Stops', [{
      stopNo: 55612,
      city: 'Vancouver',
      bayNo: 4, 
      createdAt: date,
      updatedAt: date,
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Stops', null, {})
  }
};
