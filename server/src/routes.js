const express = require('express');
const mongoose = require('mongoose');
const routes = express.Router();

const TaskController = require('./controllers/TaskController');

routes.get('/tasks', TaskController.index);
routes.post('/tasks', TaskController.store);

module.exports = routes;