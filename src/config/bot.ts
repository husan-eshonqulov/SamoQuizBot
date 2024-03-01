import dotenv from 'dotenv';

import Config from '../types/config';

dotenv.config();

const config: Config = {
  botToken: process.env.BOT_TOKEN!,
};

export default config;
