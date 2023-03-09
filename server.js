const { db } = require("./server/models");
const app = require("./server/app");
<<<<<<< HEAD
// const itemRouter = require("./server/itemRouter");
// const express = require('express')
=======
const { itemRouter } = require("./server/routes/itemRouter");

app.use("/", itemRouter);
>>>>>>> 6fa2231b1475df6ec1c3f9862f8e27241fb8b9ea

const PORT = process.env.PORT || 3000;

// app.use(express.json())

// Register the item router with the application
// app.use('/api/items', itemRouter)

// const init = async () => {
//   try {
//     await db.sync();

//     app.listen(PORT, () => {
//       console.log(`Server listening at http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.error("Error starting server:", error);
//   }
// };
// const { db } = require("./server/models");
// const app = require("./server/app");
// const { itemRouter } = require("./server/routes/itemRouter");

// app.use("/", itemRouter);


const init = async () => {
  try {
    await db.sync();

    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

init();
