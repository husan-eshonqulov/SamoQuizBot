import dotenv from 'dotenv';

import Config from '../types/config';

dotenv.config();

const config: Config = {
  botToken: process.env.BOT_TOKEN!,
  mongoUri: process.env.MONGO_URI!,
};

export default config;
