"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Posts",
      [
        {
          textContent: "... *creepy gaze*",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          textContent: "Is it Friday yet?",
          userId: 2,
          picture: "https://i.imgur.com/cg0Q95I.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          textContent: "Night night... sleep tight...",
          userId: 1,
          picture: "https://i.imgur.com/xBbVkXI.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          textContent:
            "I do wish we could chat for longer, but I'm having an old friend for dinner.",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          textContent: "Do you want a balloon too Georgie??",
          userId: 5,
          picture: "https://i.imgur.com/xYjainH.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          textContent: "Seven days...",
          userId: 6,
          picture: "https://i.imgur.com/ChBydJj.jpg",
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
