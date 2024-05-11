require('dotenv').config();
const { MongoClient } = require('mongodb');

// Connection URI
const uri = process.env.MONGODB_CONNECTION;

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectToMongoDB;

// Call the function to connect
