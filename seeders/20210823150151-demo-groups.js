"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Groups",
      [
        {
          groupName: "Disfigured Monsters",
          groupDesc: "For those of us who are scarred by our past!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupName: "Dining Out",
          groupDesc: "Anyone else like to eat humans?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Groups", null, {});
  },
};
