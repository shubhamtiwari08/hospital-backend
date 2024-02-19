const mongoose = require("mongoose")
 

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
   medicalHistory: {
    type: String,
    required: true,
  },
  contactNumber:{
    type: Number,
    required: true,
  },
  ward:String,
})


const Patient = mongoose.model("patient", patientSchema)

module.exports = Patient