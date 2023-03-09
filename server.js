const { db } = require("./server/models");
const app = require("./server/app");
// const itemRouter = require("./server/itemRouter");
// const express = require('express')

const PORT = process.env.PORT || 1234;

// app.use(express.json())

// Register the item router with the application
// app.use('/api/items', itemRouter)

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