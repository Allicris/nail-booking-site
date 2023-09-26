const { Schema, model } = require('mongoose');

const serviceSchema = new Schema({
  name: [
    {
      type: String,
      required: true,
    },
  ],
  price: {
    type: Number,
    require: true,
  },
  serviceId: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  // serviceTime: {
  //   type: Number,
  // },
  description: {
    type: String,
    required: true,
  },
});

const Services = model('Services', serviceSchema);

module.exports = Services;