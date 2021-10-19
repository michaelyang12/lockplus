import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb';
//import { MongoClient, ObjectId } from 'mongodb';
import connectDB from '../../../util/database';

//const client = new MongoClient(process.env.MONGODB_URI);
//const client = () => clientPromise.db('lock');
export default NextAuth({
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      },
      from: process.env.EMAIL_FROM,
      maxAge: 60 * 5, //5 minutes
    }),
  ],
  adapter: MongoDBAdapter({ db: connectDB() }),
  secret: process.env.AUTH_SECRET,
  debug: true,
});
