const db = require('../config/connection');
const { Idle } = require('../models');

const idleData = require('./idleData.json');

db.once('open', async () => {
  await Idle.deleteMany({});

  const idleEvents = await Idle.insertMany(idleData);

  console.log('Idle Data seeded!');
  process.exit(0);
});