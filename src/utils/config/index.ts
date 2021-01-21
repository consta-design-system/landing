export const ENVIRONMENT = {
  NODE_ENV: process.env.NODE_ENV,
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
};

export const isDev = ENVIRONMENT.NODE_ENV === ENVIRONMENT.DEVELOPMENT;
