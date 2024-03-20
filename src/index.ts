import bot from './bot';
import config from './config';
import connectDb from './utils/connectDb';
import logger from './services/logger';

const bootstrap = async () => {
  try {
    await connectDb(config.mongoUri);
    logger.info('MongoDb has been connected...');
    bot.start({
      onStart: () => {
        logger.info(`https://t.me/${bot.botInfo.username} has been started...`);
      },
    });
  } catch (err) {
    logger.error(err);
  }
};

bootstrap();
