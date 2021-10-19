import mongoose from 'mongoose';
const model_name = 'Lock';
const { Schema } = mongoose;

const lockSchema = new Schema({
  lockCode: {
    type: String,
    required: true,
    unique: true,
  },
  parent_email: {
    type: String,
    required: true,
    //unique: true,
  },
  children_emails: {
    type: [String],
    required: true,
    default: [],
  },
  settings: {
    type: [String],
    required: true,
    default: [],
  },
});

let Lock;

if (!modelAlreadyDeclared()) {
  Lock = mongoose.model(model_name, lockSchema, 'locks');
}

function modelAlreadyDeclared() {
  try {
    mongoose.model(model_name); // it throws an error if the model is still not defined
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = Lock;
