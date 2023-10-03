const { Schema, model } = require('mongoose');

const serviceSchema = new Schema({
  name:
    {
      type: String,
      required: true,
    },
  price: {
    type: Number,
    require: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
});

const Services = model('Services', serviceSchema);

module.exports = Services;