const { Schema, model } = require('mongoose');
const dateFormat = require("../utils/dateFormat")

const reportSchema = new Schema({
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
});

const Report = model ('Report', reportSchema);

module.exports = Report;