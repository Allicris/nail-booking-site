const { Schema, model } = require('mongoose');


const appointmentSchema = new Schema({
  appointmentDate: {
    type: Date,
    required: true,
  },
  appointmentTime:{
    type: String,
    required: true,
  },
    services: [ Services ]  
   },
);

const Appointment = model('Appointment', appointmentSchema);

module.exports = Appointment;