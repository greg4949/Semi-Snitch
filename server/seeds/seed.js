const db = require('../config/connection');
const { Idle, Report } = require('../models');

const idleData = require('./idleData.json');

db.once('open', async () => {
  await Idle.deleteMany({});
  await Report.deleteMany({})

  const idleEvents = await Idle.insertMany(idleData);

  console.log(idleEvents.length)
  console.log('Idle Data seeded!');

  const reports = await Report.create({idleEvents: idleEvents})

  console.log(reports)

  process.exit(0);


});
