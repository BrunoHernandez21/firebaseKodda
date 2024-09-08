const admin = require("firebase-admin");
const serviceAccount = require("./../../keys/keyFirebase.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://development-6097e-default-rtdb.firebaseio.com",
  });
}


const db = admin.database();

module.exports = {db};
