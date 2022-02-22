const express = require('express');
const router = express.Router();
const { todoData } = require('./todoData'); 

// Listar tarefas
router.get("/", (req, res, next) => {
  // #swagger.tags = ['TODO']
  // #swagger.description = 'Endpoint para listar tarefas.'
  res.json(todoData.list);
});

// Criar tarefa
router.post("/", (req, res, next) => {
  // #swagger.tags = ['TODO']
  // #swagger.description = 'Endpoint para criar tarefa.'
  todoData.index++;
  const newTodo = Object.assign(req.body, { id: todoData.index });
  todoData.list.push(newTodo);

  res.json(todoData.list);
});

// Atualizar tarefa
router.put("/", (req, res, next) => {
  // #swagger.tags = ['TODO']
  // #swagger.description = 'Endpoint para atualizar tarefa.'
  const indexToUpdate = todoData.list.findIndex((todo) => todo.id === req.body.id);

  todoData.list[indexToUpdate] = req.body;

  res.json(todoData.list);
});


// Deletar tarefa
router.delete("/:id", (req, res, next) => {
  // #swagger.tags = ['TODO']
  // #swagger.description = 'Endpoint para deletar tarefa.'
  const indexToDelete = todoData.list.findIndex((todo) => todo.id === parseInt(req.params.id, 10));

  todoData.list.splice(indexToDelete, 1);

  res.json(todoData.list);
});

module.exports = router;
