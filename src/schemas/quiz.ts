import { Schema } from 'mongoose';

const quiz = new Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    retuired: true,
  },
  answer: {
    type: Number,
    required: true,
  },
});

export default quiz;
