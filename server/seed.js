const {sauces, items} = require('./seedData.js');

const {sequelize} = require('./db');
const {Sauce} = require('./models');
<<<<<<< HEAD
const {Item} = require('./models/Item')
=======
const { Item } = require("./models/Item.js");
>>>>>>> 6fa2231b1475df6ec1c3f9862f8e27241fb8b9ea

const seed = async () => {
  try {
    // drop and recreate tables per model definitions
    await sequelize.sync({ force: true });

    // insert data
    await Promise.all(sauces.map((sauce) => Sauce.create(sauce)));

    console.log("db populated!");
  } catch (error) {
    console.error(error);
  }
};

seed();

const seedData = async () => {
<<<<<<< HEAD

    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true });
    
        // insert data
        await Promise.all(items.map(item => Item.create(item)));

        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seedData()
=======
  try {
    // drop and recreate tables per model definitions
    await sequelize.sync({ force: true });

    // insert data
    await Promise.all(items.map((item) => Item.create(item)));

    console.log("db populated!");
  } catch (error) {
    console.error(error);
  }
};

seedData();
>>>>>>> 6fa2231b1475df6ec1c3f9862f8e27241fb8b9ea
