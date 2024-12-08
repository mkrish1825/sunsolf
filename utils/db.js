import { MongoClient } from "mongodb";
// import dotenv from "dotenv";

const { MONGODB_URI, DB_NAME } = process.env;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

if (!DB_NAME) {
  throw new Error(
    "Please define the DB_NAME environment variable inside .env.local"
  );
}

let cachedClient = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = await MongoClient.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db(DB_NAME);

  cachedClient = { client, db };

  return cachedClient;
}
