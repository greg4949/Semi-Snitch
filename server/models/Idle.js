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
    type: Schema.Types.Decimal128
  },

  city: {
    type: String
  },

  state: {
    type: String
  },

  lat: {
    type: Schema.Types.Decimal128
  },

  long: {
    type: Schema.Types.Decimal128
  }
});

const Idle = model('Idle', idleSchema);

module.exports = Idle;