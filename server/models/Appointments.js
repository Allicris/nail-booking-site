const { Schema, model } = require('mongoose');


const appointmentSchema = new Schema({
  appointmentDate: {
    type: Date,
    required: true,
  },
  availableTimes: [
    {
      Nine: {
        type: Boolean,
        required: true,
      },
      Eleven: {
        type: Boolean,
        required: true,
      },
      One: {
        type: Boolean,
        required: true,
      },
      Three: {
        type: Boolean,
        required: true,
      },
    services: [ Services ]  
    },
  ],
});

const Appointment = model('Appointment', appointmentSchema);

module.exports = Appointment;