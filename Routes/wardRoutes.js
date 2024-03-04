const express = require("express");
const app = express;
const Router = app.Router();

const {
  getWards,
  addWard,
  deleteWard,
  updateWard,
} = require("../controllers/wardController");

Router.get("/", async (req, res) => {
  try {
    const wards = await getWards();
    res.json({ wards });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

Router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const wards = await addWard(req.body);
    res.json({ wards });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

Router.post("/:id", async (req, res) => {
  console.log(req.body);
  try {
    const wards = await updateWard(req.params.id, req.body);
    res.json({ wards });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

Router.post("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const wards = await deleteWard(id);
    res.json({ wards });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = Router;
