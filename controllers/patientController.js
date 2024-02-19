


const Patient = require('../models/patient.model.js');

console.log(Patient)


const getPatients = async () => {
  try {
    const patients = await Patient.find()
    console.log(patients)
    return patients;

  } catch (e) {
    throw e
  }
}

const addPatient = async (patient) => {
  try {
    const updatedList = await Patient(patient)
    const savedList = await updatedList.save()
    console.log(savedList)
    return savedList

  } catch (e) {
    throw e
  }
}

const updatePatient = async (id, updates) => {
  console.log(id)
  try {
    const patientToBeUpdated = await Patient.findByIdAndUpdate(id, updates, { new: true })
    const savedList = await patientToBeUpdated.save()
    console.log(savedList)
    return savedList

  } catch (e) {
    throw e
  }
}

const deletePatient = async (id) => {
  try {
    const patientToBeDeleted = await Patient.findByIdAndDelete(id)
    const newList = Patient.find({});
    console.log(newList)
    return newList

  } catch (e) {
    throw e
  }
}



module.exports = { getPatients, addPatient, deletePatient, updatePatient }