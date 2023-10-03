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
        name: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        image: {
          type: String,
        },
        description: {
          type: String,
          required: true,
        },
      },
      {
        type: Schema.Types.ObjectId,
        ref: 'Services'
      }
    ],
   },
);

//Custom validation to ensure at least one service is selected.
appointmentSchema.path('services').validate(function (value) {
  return value.length > 0;
}, 'Atleast one service must be selected for the appointment')

const Appointment = model('Appointment', appointmentSchema);

module.exports = Appointment;