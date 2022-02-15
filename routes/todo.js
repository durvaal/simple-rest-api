var express = require('express');
var router = express.Router();

const todoList = [
  {
    id: 1,
    task: "Fazer 10 abdominais"
  },
  {
    id: 2,
    task: "Fazer supino"
  }
];
let index = 2;

// Listar tarefas
router.get("/", (req, res, next) => {
  // #swagger.tags = ['TODO']
  // #swagger.description = 'Endpoint para listar tarefas.'
  res.json(todoList);
});

// Criar tarefa
router.post("/", (req, res, next) => {
  // #swagger.tags = ['TODO']
  // #swagger.description = 'Endpoint para criar tarefa.'
  index++;
  const newTodo = Object.assign(req.body, { id: index });

  todoList.push(newTodo);

  res.json(todoList);
});

// Atualizar tarefa
router.put("/", (req, res, next) => {
  // #swagger.tags = ['TODO']
  // #swagger.description = 'Endpoint para atualizar tarefa.'
  const indexToUpdate = todoList.findIndex((todo) => todo.id === req.body.id);

  todoList[indexToUpdate] = req.body;

  res.json(todoList);
});


// Deletar tarefa
router.delete("/:id", (req, res, next) => {
  // #swagger.tags = ['TODO']
  // #swagger.description = 'Endpoint para deletar tarefa.'
  const indexToDelete = todoList.findIndex((todo) => todo.id === parseInt(req.params.id, 10));

  todoList.splice(indexToDelete, 1);

  res.json(todoList);
});

module.exports = router;
