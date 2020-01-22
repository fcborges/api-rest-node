const Aluno = require("../models/customer.model.js/index.js.js");

// Create and Save a new aluno
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Aluno
  const aluno = new Aluno({
    email: req.body.email,
    name: req.body.name,
    active: req.body.active
  });

  // Save Aluno in the database
  Aluno.create(aluno, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Aluno."
      });
    else res.send(data);
  });
};

// Retrieve all Alunos from the database.
exports.findAll = (req, res) => {
  Aluno.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving alunos."
      });
    else res.send(data);
  });
};

// Find a single aluno with a alunoId
exports.findOne = (req, res) => {
  Aluno.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found aluno with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving aluno with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// Update a aluno identified by the alunoId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  aluno.updateById(
    req.params.id,
    new aluno(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found aluno with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating aluno with id " + req.params.alunoId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a aluno with the specified alunoId in the request
exports.delete = (req, res) => {
  aluno.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found aluno with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete aluno with id " + req.params.id
        });
      }
    } else res.send({ message: `aluno was deleted successfully!` });
  });
};

// Delete all alunos from the database.
exports.deleteAll = (req, res) => {
  Aluno.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all alunos."
      });
    else res.send({ message: `All alunos were deleted successfully!` });
  });
};
