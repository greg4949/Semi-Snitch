const { Schema, model } = require('mongoose');

const idleSchema = new Schema({
  startTime: {
    type: Date,    
  },

  endTime: {
    type: Date,    
  },

  driverName: {
    type: String
  },

  vehicle: {
    type: String
  },

  idleMinutes: {
    type: String
  },

  city: {
    type: String
  },

  state: {
    type: String
  },

  lat: {
    type: String
  },

  long: {
    type: String
  }
});

const Idle = model('Idle', idleSchema);

module.exports = Idle;