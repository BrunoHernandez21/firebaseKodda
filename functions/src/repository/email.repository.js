
const {db} = require("../configurations/firebase.config");
const {create, getById, update, remove} = require("./common.respository");

const dbKey = "emailLogs";

const createEmail = async (data) => await create(db, dbKey, data);
const getEmail = async (id) => await getById(db, dbKey, id);
const updateEmail = async (id, data) => await update(db, dbKey, id, data);
const deleteEmail = async (id) => await remove(db, dbKey, id);


exports.createEmail = createEmail;
exports.getEmail = getEmail;
exports.updateEmail = updateEmail;
exports.deleteEmail = deleteEmail;
