const admin = require("firebase-admin");
const fs = require('fs');
let keyPath = '/firebase-key.json';

if (!fs.existsSync(keyPath)) {
  keyPath = './firebase-key.json'; // fallback for local dev
}

const serviceAccount = require(keyPath);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
