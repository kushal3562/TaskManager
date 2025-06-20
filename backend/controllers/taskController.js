const db = require('../db');

// Get all tasks
exports.getTasks = (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// Add a new task
exports.createTask = (req, res) => {
  const { title, description, status, dueDate } = req.body;
  const query = 'INSERT INTO tasks (title, description, status, dueDate) VALUES (?, ?, ?, ?)';
  db.query(query, [title, description, status, dueDate], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ id: result.insertId, title, description, status, dueDate });
  });
};

// Update a task
exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, status, dueDate } = req.body;
  const query = 'UPDATE tasks SET title=?, description=?, status=?, dueDate=? WHERE id=?';
  db.query(query, [title, description, status, dueDate, id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Task updated successfully' });
  });
};

// Delete a task
exports.deleteTask = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM tasks WHERE id=?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Task not found' });
    res.status(204).send();
  });
};
