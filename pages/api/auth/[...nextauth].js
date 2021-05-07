import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { verifyPassword } from 'utilities/encryption';
import { connectDatabase } from 'utilities/MongoDb';

export default NextAuth({
  session: {
    jwt: true,
  },
  // only used  in development
  callbacks: {
    async redirect(url, baseUrl) {
      return url;
    },
  },
  providers: [
    Providers.Credentials({
      async authorize({ email, password }) {
        const client = await connectDatabase();

        const accountsCollection = client.db().collection('accounts');

        const account = await accountsCollection.findOne({ email: email });

        if (!account) {
          client.close();
          throw new Error(
            "Sorry, but we can't find an account with this email address. Please try again."
          );
        }

        const isValid = await verifyPassword(password, account.password);

        if (!isValid) {
          client.close();
          throw new Error('Incorrect password. Please try again.');
        }

        client.close();
        return { email: account.email };
      },
    }),
  ],
});
