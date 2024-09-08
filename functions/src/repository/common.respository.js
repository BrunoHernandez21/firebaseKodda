const create = async (db, dbKey, data) => {
  const newRecordRef = db.ref(dbKey).push();
  await newRecordRef.set(data);
  return newRecordRef;
};

const getById = async (db, dbKey, id) => {
  const ref = db.ref(`${dbKey}/${id}`);
  const snapshot = await ref.once("value");
  return snapshot;
};

const update = async (db, dbKey, id, data) => {
  const ref = db.ref(`${dbKey}/${id}`);
  await ref.update(data);
  const snapshot = await ref.once("value");
  return snapshot;
};


const remove = async (db, dbKey, id) => {
  const ref = db.ref(`${dbKey}/${id}`);
  return await ref.remove();
};

module.exports = {
  create,
  getById,
  update,
  remove,
};
