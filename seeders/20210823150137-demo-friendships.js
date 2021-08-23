"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Friendships",
      [
        {
          userOne: "freddy",
          userTwo: "jason",
          isFriend: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userOne: "jason",
          userTwo: "pennywise",
          isFriend: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userOne: "hannibal",
          userTwo: "freddy",
          isFriend: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userOne: "michael",
          userTwo: "pennywise",
          isFriend: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Friendships", null, {});
  },
};
