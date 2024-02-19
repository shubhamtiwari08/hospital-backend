const mongoose = require("mongoose")

const wardSchema = new mongoose.Schema({
  number: {
    type: Number,
  },
  capacity: {
    type: String,
  },
  specialisation: {
    type: String
  }
})

const Ward = mongoose.model("ward", wardSchema)

module.exports = Ward