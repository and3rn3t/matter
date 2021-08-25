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
          userName: "freddy",
          password: "bladesout",
          profilePic: "https://i.imgur.com/Pb6SKnp.jpg",
          description:
            "Freddy attacks his victims in their dreams. He is commonly identified by his burned, disfigured face, dirty red-and-green-striped sweater and brown fedora, and trademark metal-clawed brown leather glove only on his right hand.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fname: "Jason",
          lname: "Voorhees",
          email: "jason@monsters.com",
          userName: "jason",
          password: "hockeymask",
          profilePic: "https://i.imgur.com/Vub8aKw.jpg",
          description:
            "The character has primarily been an antagonist in the films, whether by stalking and killing the other characters, or acting as a psychological threat to the protagonist.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fname: "Michael",
          lname: "Myers",
          email: "michaelmyers@monsters.com",
          userName: "mike",
          password: "halloween",
          profilePic: "https://i.imgur.com/329nU8R.jpg",
          description:
            "Michael Myers is pure evil. He is almost a supernatural force — a force of nature. An evil force that's loose... a force that is 'unkillable'.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fname: "Hannibal",
          lname: "Lecter",
          email: "hannibal@monsters.com",
          userName: "hannibal",
          password: "favabeans",
          profilePic: "https://i.imgur.com/uFup7OH.jpg",
          description:
            "Lecter is a once respected forensic psychiatrist turned serial killer who eats his victims. After his incarceration, he was consulted by FBI agents Graham and Starling to find other serial killers.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fname: "Pennywise",
          lname: "X",
          email: "pennywise@monsters.com",
          userName: "pennywise",
          password: "wefloat",
          profilePic: "https://i.imgur.com/JFOVMLB.jpg",
          description:
            "An ancient cosmic evil that preys upon the children of Derry roughly every 27 years. It uses a variety of powers, such as shapeshifting, manipulating reality, and going unnoticed by adults.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fname: "Samara",
          lname: "Morgan",
          email: "samara@monsters.com",
          userName: "samara",
          password: "7days",
          profilePic: "https://i.imgur.com/I6S7L7b.jpg",
          description:
            "Samara Morgan is the central antagonist of The Ring, the series of American films. She is the vengeful spirit of a young girl who had a tragic life.",
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
