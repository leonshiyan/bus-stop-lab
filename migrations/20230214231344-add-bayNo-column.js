'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Add column:
    await queryInterface.addColumn('Stops', 'bayNo', { type: Sequelize.INTEGER })
  },
  async down (queryInterface, Sequelize) {
    // Remove column:
    await queryInterface.removeColumn('Stops', 'bayNo')
  }
};
