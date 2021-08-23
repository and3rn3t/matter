"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Posts",
      [
        {
          textContent: "Hello World!",
          userId: "mike",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          textContent: "First post woooooooo!",
          userId: "hannibal",
          picture: "https://i.imgur.com/vSvITlw.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          textContent: "Does anybody read these??",
          userId: "jason",
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
