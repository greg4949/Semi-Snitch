const { Schema, model } = require('mongoose');
const dateFormat = require("../utils/dateFormat")

const idleSchema = new Schema({
  createdDate: {
    type: Date,
    get: (timestamp) => dateFormat(timestamp),
  },
  driverName: {
    type: String,
    required: true,
  },
  vehicle: {
    type: String,
    required: true,
  },
  idleMinutes: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  lat:{
    type: String,
    required: true,
  },
  long: {
    type:String,
    required: true,
  },
  minTemp: {
    type: String,
  },
  maxTemp: {
    type: String,
  },
  coaching: {
    type: String,
  }
});

const Idle = model ('Idle', idleSchema);

module.exports = Idle;