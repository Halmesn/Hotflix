import { hashPassword } from 'utilities/encryption';
import { connectDatabase, insertDocument } from 'utilities/MongoDb';

async function handler(req, res) {
  const { email, password } = req.body;
  const hashedPassword = await hashPassword(password);

  // some input validation if needed
  //   if () {
  //     res.status(422).json({ error: 'Invalid input!' });
  //     return;
  //   }

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
      .collection('users')
      .findOne({ email: email });
    if (isExisting) {
      res.status(422).json({ message: 'User exists already!' });
      client.close();
      return;
    }

    const formData = {
      email,
      password: hashedPassword,
    };

    try {
      await insertDocument('users', client, formData);
      res.status(201).json({ message: 'Successfully signed up!' });
    } catch (error) {
      res.status(500).json({ message: 'Signing up failed' });
    }
  }

  client.close();
}

export default handler;
