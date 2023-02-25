export const PORT = 3000;
export const DB_URL =
  'mongodb+srv://lokum:TmbqkNOksEHi8A4e@cluster0.wclftqx.mongodb.net/?retryWrites=true&w=majority';
export const SECRET_KEY = 'Ab94iu1mPdXZ4WOsXX5x';
export const corsOptions = {
  origin: [
    'http://localhost:8080',
    'https://bespoke-profiterole-1402f4.netlify.app',
    'https://deploy-preview-17--bespoke-profiterole-1402f4.netlify.app',
    'https://deploy-preview-18--bespoke-profiterole-1402f4.netlify.app',
    'https://deploy-preview-19--bespoke-profiterole-1402f4.netlify.app',
    'https://deploy-preview-20--bespoke-profiterole-1402f4.netlify.app',
    'https://deploy-preview-21--bespoke-profiterole-1402f4.netlify.app',
    'https://deploy-preview-22--bespoke-profiterole-1402f4.netlify.app',
  ],
  credentials: true,
  optionSuccessStatus: 200,
  preflightContinue: true,
};
