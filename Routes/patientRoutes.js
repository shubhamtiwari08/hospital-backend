const express = require("express");
const app = express;
const Router = app.Router();

const {
  getPatients,
  addPatient,
  deletePatient,
  updatePatient,
} = require("../controllers/patientController");

Router.get("/", async (req, res) => {
  try {
    const patients = await getPatients();
    res.json({ patients });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

Router.post("/", async (req, res) => {
  console.log("working", req.body);
  try {
    const patients = await addPatient(req.body);
    res.json({ patients });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

Router.post("/:id", async (req, res) => {
  console.log("working", req.body);
  try {
    const patient = await updatePatient(req.params.id, req.body);
    res.json({ patient });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

Router.post("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const patients = await deletePatient(id);
    res.json({ patients });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = Router;
