// // We will be using the Jest testing framework for demonstration purposes
// const request = require("supertest");
// const { Item } = require("./models/Item"); // Require the item model

// // Mock the express.Router() function
// jest.mock("express", () => ({
//   Router() {
//     return {
//       route: jest.fn(),
//       get: jest.fn(),
//     };
//   },
// }));

// describe("/items GET Endpoint", () => {
//   let router;
//   beforeEach(() => {
//     const express = require("express");
//     router = express.Router();
//     Item.findAll = jest.fn(); // Mock the findAll method on the Item model
//     router.route.mockReturnValue(router);
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it("should return all items when successfully queried", async () => {
//     // Arrange
//     const fakeItems = [{ id: 1, name: "Item 1" }, { id: 2, name: "Item 2" }];
//     Item.findAll.mockResolvedValue(fakeItems);

//     // Act
//     router.get.mockImplementationOnce((path, callback) => {
//       callback(
//         { method: "GET", url: path },
//         { send: (response) => expect(response).toEqual(fakeItems) }
//       );
//     });
//     await request(router).get("/items");

//     // Assert
//     expect(Item.findAll).toHaveBeenCalledTimes(1);
//   });

//   it("should return an error message when failed to query items", async () => {
//     // Arrange
//     const errorMessage = "Failed to query items";
//     Item.findAll.mockRejectedValue(new Error(errorMessage));

//     // Act
//     router.get.mockImplementationOnce((path, callback) => {
//       callback(
//         { method: "GET", url: path },
//         { send: (response) => expect(response.message).toEqual(errorMessage) }
//       );
//     });
//     await request(router).get("/items");

//     // Assert
//     expect(Item.findAll).toHaveBeenCalledTimes(1);
//   });
// });