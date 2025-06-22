const request = require('supertest');
const mongoose = require('mongoose'); // ✅ Add this line
const app = require('../src/index');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

afterAll(async () => {
  await mongoose.connection.close(); // ✅ Properly close MongoDB connection
});

describe('GET /api/tasks', () => {
  it('should return 200 and an array', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
