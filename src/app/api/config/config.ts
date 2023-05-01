import dotenv from 'dotenv';
dotenv.config();

export const urlMongo = process.env.MONGO_MTFLW || '';
export const dbMongo = process.env.MONGO_DB || '';
