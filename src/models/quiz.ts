import { model } from 'mongoose';

import quizSchema from '../schemas/quiz';

const userModel = model('Quiz', quizSchema);

export default userModel;
