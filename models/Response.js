import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  response: {
    type: String,
    required: true
  },
  writtenResponse: {
    type: String,
    required: false
  }
});

const Response = mongoose.model('Response', ResponseSchema);

export default Response;
