import { model } from 'mongoose';

import quizSchema from '../schemas/quiz';

export default model('Quiz', quizSchema);
