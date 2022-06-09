const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'myProject';

async function connect() {
  // Use connect method to connect to the server
  await client.connect();
  const db = client.db(dbName);

  return db;
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

module.exports = async () => {
  try {
    return await connect();
  } catch (err) {
    //TODO: Сделать нормальное логирование как в основном проекте
    console.error(err, err.stack);
    throw new Error(err);
  }
};