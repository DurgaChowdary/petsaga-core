const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: String,
  petTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PetType',
    required: true
  },
  age: Number,
  weight: Number,
  height: Number,
  gender: String,
  colour: String,
  specialNotes: String,
  vetIDs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  groomingAgencyIDs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  createdAt: Date,
  updatedAt: Date
});

module.exports = mongoose.model('Pet', userSchema);