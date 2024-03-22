import winston from 'winston';

const { createLogger, format, transports } = winston;
const { combine, timestamp, printf, colorize } = format;

const myFormat = printf(({ level, message, timestamp, stack }) => {
  return `[Bot] ${process.pid}  - ${timestamp}     [${level.toUpperCase()}]: ${
    stack || message
  }`;
});

const devLogger = createLogger({
  level: 'debug',
  format: combine(
    timestamp({
      format: 'DD/MM/YYYY h:mm:ss A'
    }),
    myFormat,
    colorize({ all: true })
  ),
  transports: [new transports.Console()]
});

export default devLogger;
