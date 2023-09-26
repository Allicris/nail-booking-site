const { Schema, model } = require('mongoose');
const Services = require('./Services');

const appointmentSchema = new Schema({
  appointmentDate: {
    type: Date,
    required: true,
  },
  appointmentTime:{
    type: String,
    required: true,
  },
    services: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Services'
      }
    ],
   },
);

const Appointment = model('Appointment', appointmentSchema);

module.exports = Appointment;