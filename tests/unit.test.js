const { getTasks, createTask, updateTask, deleteTask } = require('../src/controllers/taskController');
const Task = require('../src/models/taskModel');
jest.mock('../src/models/taskModel'); // Mock the Task model

// --- Test getTasks ---
describe('Unit Test: getTasks', () => {
  it('should return all tasks with status 200', async () => {
    const mockTasks = [{ title: 'Task 1' }, { title: 'Task 2' }];
    Task.find.mockResolvedValue(mockTasks);

    const req = {};
    const res = { json: jest.fn() };

    await getTasks(req, res);
    expect(Task.find).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(mockTasks);
  });
});

// --- Test createTask ---
describe('Unit Test: createTask', () => {
  it('should create a task and return it with status 201', async () => {
    const mockTask = { _id: '123', title: 'Mock Task', save: jest.fn() };
    Task.mockImplementation(() => mockTask);

    const req = { body: { title: 'Mock Task' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await createTask(req, res);
    expect(mockTask.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockTask);
  });
});

// --- Test updateTask ---
describe('Unit Test: updateTask', () => {
  it('should update and return the task', async () => {
    const updatedTask = { _id: '123', title: 'Updated Task' };
    Task.findByIdAndUpdate.mockResolvedValue(updatedTask);

    const req = {
      params: { id: '123' },
      body: { title: 'Updated Task' }
    };
    const res = { json: jest.fn() };

    await updateTask(req, res);
    expect(Task.findByIdAndUpdate).toHaveBeenCalledWith('123', { title: 'Updated Task' }, { new: true });
    expect(res.json).toHaveBeenCalledWith(updatedTask);
  });
});

// --- Test deleteTask ---
describe('Unit Test: deleteTask', () => {
  it('should delete the task and return confirmation', async () => {
    Task.findByIdAndDelete.mockResolvedValue({});

    const req = { params: { id: '123' } };
    const res = { json: jest.fn() };

    await deleteTask(req, res);
    expect(Task.findByIdAndDelete).toHaveBeenCalledWith('123');
    expect(res.json).toHaveBeenCalledWith({ message: 'Task deleted' });
  });
});
