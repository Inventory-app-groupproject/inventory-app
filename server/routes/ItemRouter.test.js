const request = require('supertest');
const app = require('../app'); // assuming the Express app is defined in app.js
const {Item} = require('../models/Item');

// test GET /items route
describe('GET /items', () => {
  it('should return an array of items', async () => {
    const response = await request(app).get('/api/items');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should return all items in the database', async () => {
    const response = await request(app).get('/api/items');
    const items = await Item.findAll();
    expect(response.body.length).toBe(items.length);
  });
});

// test GET /items/:id route
describe('GET /items/:id', () => {
  it('should return an item with the specified id', async () => {
    const newItem = await Item.create({title: 'test item'});
    const response = await request(app).get(`/api/items/${newItem.id}`);
    expect(response.status).toBe(200);
    expect(response.body.title).toBe('test item');
  });

  it('should return a 404 error if the item does not exist', async () => {
    const response = await request(app).get('/api/items/999');
    expect(response.status).toBe(404);
  });
});

// test POST /items route
describe('POST /items', () => {
  it('should create a new item in the database', async () => {
    const response = await request(app)
      .post('/api/items')
      .send({title: 'new item'});
    expect(response.status).toBe(200);
    const newItem = await Item.findByPk(response.body.id);
    expect(newItem.title).toBe('new item');
  });
});

// test PUT /items/:id route
describe('PUT /items/:id', () => {
  it('should update an existing item in the database', async () => {
    const newItem = await Item.create({title: 'test item'});
    const response = await request(app)
      .put(`/api/items/${newItem.id}`)
      .send({title: 'updated item'});
    expect(response.status).toBe(200);
    const updatedItem = await Item.findByPk(newItem.id);
    expect(updatedItem.title).toBe('updated item');
  });

  it('should return a 404 error if the item does not exist', async () => {
    const response = await request(app)
      .put('/api/items/999')
      .send({title: 'updated item'});
    expect(response.status).toBe(404);
  });
});

// test DELETE /items/:id route
describe('DELETE /items/:id', () => {
  it('should delete an existing item from the database', async () => {
    const newItem = await Item.create({title: 'test item'});
    const response = await request(app).delete(`/api/items/${newItem.id}`);
    expect(response.status).toBe(200);
    const deletedItem = await Item.findByPk(newItem.id);
    expect(deletedItem).toBeNull();
  });

  it('should return a 404 error if the item does not exist', async () => {
    const response = await request(app).delete('/api/items/999');
    expect(response.status).toBe(404);
  });
});