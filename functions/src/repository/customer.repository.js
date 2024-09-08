
const { db } = require("./../configurations/firebase.config")
const { create, getById, update, remove } = require('./common.respository');
const logger = require("firebase-functions/logger");


const dbKey = "customer";
const  createCustomer       = async (data)      => await create(db, dbKey, data);
const  getCustomer          = async (id)        => await getById(db, dbKey, id);
const  updateCustomer       = async (id, data)  => await update(db, dbKey, id, data);
const  deleteCustomer       = async (id)        => await remove(db, dbKey, id);
const  getCustomerByEmail   = async (email)     => {
    const ref = db.ref(dbKey);
    const snapshot = ref.orderByChild('email').equalTo(email).once('value');
    return snapshot;
}


exports.createCustomer = createCustomer;
exports.getCustomer = getCustomer;
exports.updateCustomer = updateCustomer;
exports.deleteCustomer = deleteCustomer;
exports.getCustomerByEmail = getCustomerByEmail;