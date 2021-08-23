"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Posts", "userId", {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {},
};
