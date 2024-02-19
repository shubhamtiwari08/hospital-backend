


const Ward = require('../models/ward.model.js');




const getWards = async () => {
  try {
    const wards = await Ward.find()
    console.log(wards)
    return wards;

  } catch (e) {
    throw e
  }
}

const addWard = async (ward) => {
  console.log(ward, "ward")
  try {
    const updatedList = await Ward(ward)
    const savedList = await updatedList.save()
    console.log(savedList)
    return savedList

  } catch (e) {
    throw e
  }
}

const updateWard = async (id, updates) => {
  console.log(id)
  try {
    const wardToBeUpdated = await Ward.findByIdAndUpdate(id, updates, { new: true })
    const savedList = await wardToBeUpdated.save()
    console.log(savedList)
    return savedList

  } catch (e) {
    throw e
  }
}

const deleteWard = async (id) => {
  try {
    const wardToBeDeleted = await Ward.findByIdAndDelete(id)
    const newList = Ward.find({});
    console.log(newList)
    return newList

  } catch (e) {
    throw e
  }
}



module.exports = { getWards, addWard, deleteWard, updateWard }