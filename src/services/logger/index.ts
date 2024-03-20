import config from '../../config';
import prodLogger from './production';
import devLogger from './development';

const logger = config.nodeEnv === 'production' ? prodLogger : devLogger;

export default logger;
