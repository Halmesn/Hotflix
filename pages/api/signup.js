import { hashPassword } from 'helpers/passwordHelpers';
import { connectDatabase, insertDocument } from 'helpers/databaseHelpers';

async function handler(req, res) {
  const { email, password } = req.body;
  const hashedPassword = await hashPassword(password);

  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: 'Connection to database failed' });
    return;
  }

  if (req.method === 'POST') {
    const isExisting = await client
      .db()
      .collection('accounts')
      .findOne({ email: email });
    if (isExisting) {
      res
        .status(422)
        .json({ message: 'Account exists already, please try again.' });
      client.close();
      return;
    }

    const formData = {
      email,
      password: hashedPassword,
    };

    try {
      await insertDocument('accounts', client, formData);
      res.status(201).json({ message: 'Successfully signed up!' });
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Something went wrong, signing up failed' });
    }
  }

  client.close();
}

export default handler;
