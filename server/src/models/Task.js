const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

mongoose.model('Task', TaskSchema);