const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../src/index');
const Task = require('../src/models/taskModel'); // 👈 required to clean up

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('POST /api/tasks', () => {
  it('should create a task', async () => {
    const res = await request(app).post('/api/tasks').send({
      title: 'Test Task',
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test Task');

    // ✅ Clean up after test
    await Task.findByIdAndDelete(res.body._id);
  });
});
