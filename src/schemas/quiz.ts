import { Schema } from 'mongoose';

const quiz = new Schema({
  question: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    retuired: true
  },
  answer: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});

export default quiz;
