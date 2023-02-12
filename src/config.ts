export const PORT = 3000;
export const DB_URL =
  'mongodb+srv://lokum:TmbqkNOksEHi8A4e@cluster0.wclftqx.mongodb.net/?retryWrites=true&w=majority';
export const SECRET_KEY = 'Ab94iu1mPdXZ4WOsXX5x';
export const corsOptions = {
  origin: [
    'http://localhost:8080',
    'https://deploy-preview-6--bespoke-profiterole-1402f4.netlify.app',
  ],
  credentials: true,
  optionSuccessStatus: 200,
};
