import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  response: {
    type: String,
    required: true
  }
});

const Response = mongoose.model('Response', ResponseSchema);

export default Response;
