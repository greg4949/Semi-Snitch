const { Schema, model } = require('mongoose');

const reportSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  idleEvents: [
    {
      type: Schema.Types.ObjectId,
      ref: 'IdleEvent'
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Report = model('Report', reportSchema);

module.exports = Report;