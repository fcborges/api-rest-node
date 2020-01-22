module.exports = app => {
  const alunos = require("../controllers/alunos.controller.js/index.js");

  // Create a new Customer
  app.post("/alunos", alunos.create);

  // Retrieve all Customers
  app.get("/alunos", alunos.findAll);

  // Retrieve a single Customer with customerId
  app.get("/alunos/:id", alunos.findOne);

  // Update a Customer with customerId
  app.put("/alunos/:id", alunos.update);

  // Delete a Customer with customerId
  app.delete("/alunos/:id", alunos.delete);

  // Create a new Customer
  app.delete("/alunos", alunos.deleteAll);
};
