import connectDb from './utils/connectDb';
import config from './config';
import bot from './bot';

const bootstrap = async () => {
  try {
    await connectDb(config.mongoUri);
    bot.start();
  } catch (err) {
    throw err;
  }
};

bootstrap();
