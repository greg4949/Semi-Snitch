const { Schema, model } = require('mongoose');

const reportSchema = new Schema({
  idleEvents: [
    {
      type: Schema.Types.ObjectId,
      ref: 'IdleEvent'
    }
  ]
});

const Report = model('Report', reportSchema);

module.exports = Report;