const { Schema, model } = require('mongoose');

const usersSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  appointment: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Appointment'
    }
  ]
});

const Users = model('Users', usersSchema);

module.exports = Users;
