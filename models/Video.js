const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  writer: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    maxlength: 50
  }
});
