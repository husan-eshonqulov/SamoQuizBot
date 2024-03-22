import winston from 'winston';

const { createLogger, format, transports } = winston;
const { combine, timestamp, json } = format;

const prodLogger = createLogger({
  level: 'info',
  format: combine(timestamp(), json()),
  transports: [
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' })
  ]
});

export default prodLogger;
