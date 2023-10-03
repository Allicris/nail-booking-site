const db = require('../config/connection');
const { Users, Services, Appointment } = require('../models');
const usersSeeds = require('./usersSeeds.json'); 
const serviceSeeds = require('./serviceSeeds.json');
const appointmentSeeds = require ('./appointmentSeeds.json');
const cleanDB = require('./cleanDB'); 

db.once('open', async () => {
  try {
    // Clean the 'Users' collection
    await cleanDB('Users', 'users');

  await Users.create(usersSeeds);
  await Services.create(serviceSeeds);
  //loop through seeds and pull [0] and assign to the services in the appointmentseed.
  await Appointment.create(appointmentSeeds);

    console.log('All done!');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    process.exit(0);
  }
});
