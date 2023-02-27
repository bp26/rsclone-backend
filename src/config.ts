export const PORT = 3000;
export const DB_URL =
  'mongodb+srv://lokum:TmbqkNOksEHi8A4e@cluster0.wclftqx.mongodb.net/?retryWrites=true&w=majority';
export const SECRET_KEY = 'Ab94iu1mPdXZ4WOsXX5x';
export const corsOptions = {
  origin: [
    'http://localhost:8080',
    'https://rs-rush.netlify.app',
    'https://deploy-preview-19--rs-rush.netlify.app',
    'https://deploy-preview-20--rs-rush.netlify.app',
    'https://deploy-preview-21--rs-rush.netlify.app',
    'https://deploy-preview-22--rs-rush.netlify.app',
    'https://deploy-preview-23--rs-rush.netlify.app',
    'https://deploy-preview-24--rs-rush.netlify.app',
    'https://deploy-preview-25--rs-rush.netlify.app',
    'https://deploy-preview-26--rs-rush.netlify.app',
    'https://deploy-preview-27--rs-rush.netlify.app',
    'https://deploy-preview-28--rs-rush.netlify.app',
  ],
  credentials: true,
  optionSuccessStatus: 200,
  preflightContinue: true,
};
