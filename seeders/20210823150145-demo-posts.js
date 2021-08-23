"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Posts",
      [
        {
          textContent: "Hello World!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          textContent: "First post woooooooo!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          textContent: "Does anybody read these??",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Posts");
  },
};
