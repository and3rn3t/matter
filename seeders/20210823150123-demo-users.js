"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          fname: "Freddy",
          lname: "Krueger",
          email: "freddykrueger@monsters.com",
          userId: "freddy",
          password: "bladesout",
          profilePic: "",
          description:
            "Freddy attacks his victims from within their dreams. He is commonly identified by his burned, disfigured face, dirty red-and-green-striped sweater and brown fedora, and trademark metal-clawed brown leather glove only on his right hand.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fname: "Jason",
          lname: "Voorhees",
          email: "jason@monsters.com",
          userId: "jason",
          password: "hockeymask",
          profilePic: "",
          description:
            "The character has primarily been an antagonist in the films, whether by stalking and killing the other characters, or acting as a psychological threat to the protagonist.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fname: "Michael",
          lname: "Myers",
          email: "michaelmyers@monsters.com",
          userId: "mike",
          password: "halloween",
          profilePic: "",
          description:
            "Michael Myers is pure evil. He is almost a supernatural force— a force of nature. An evil force that's loose, a force that is 'unkillable'.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fname: "Hannibal",
          lname: "Lecter",
          email: "hannibal@monsters.com",
          userId: "hannibal",
          password: "favabeans",
          profilePic: "",
          description:
            "Lecter is a serial killer who eats his victims. Before his capture, he was a respected forensic psychiatrist; after his incarceration, he is consulted by FBI agents Will Graham and Clarice Starling to help them find other serial killers.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fname: "Pennywise",
          lname: "X",
          email: "pennywise@monsters.com",
          userId: "pennywise",
          password: "wefloat",
          profilePic: "",
          description:
            "The character is an ancient cosmic evil which preys upon the children of Derry, Maine, roughly every 27 years, using a variety of powers that include the ability to shapeshift, manipulate reality, and go unnoticed by adults.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
