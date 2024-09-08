const customerRepository = require('./../repository/customer.repository');
const emailRepository = require('./../repository/email.repository');
const logger = require("firebase-functions/logger");

const createCustomer = async (data) => {
    const snapshotCustomer = await customerRepository.getCustomerByEmail(data.email);
    if (snapshotCustomer.exists()) { logger.info("3"); throw new Error("DuplicateKey"); }
    const recordRef = await customerRepository.createCustomer(data);

    const time = (new Date()).toISOString();
    const emailModel = {
        userId: recordRef.key, 
        status: "pending",
        type: "welcome",
        createdAt: time,
    }

    await emailRepository.createEmail(emailModel);
    return recordRef.key;
}
const getCustomer = async (id) => {
    const snapshotOut = await customerRepository.getCustomer(id);
    if (!snapshotOut.exists()) throw new Error("NotFound");
    return {...snapshotOut.val(),id: snapshotOut.key};
}
const updateCustomer = async (data,id) => {
    const snapshotCustomer = await customerRepository.getCustomer(id);
    if (!snapshotCustomer.exists()) throw new Error("NotFound");
    const snapshotOut = await customerRepository.updateCustomer(id,data); 
    return {...snapshotOut.val(),id: snapshotOut.key};
}
const deleteCustomer = async (id) => {
    const response = await customerRepository.deleteCustomer(id); 
    return response;
}

exports.createCustomer = createCustomer;
exports.getCustomer = getCustomer;
exports.updateCustomer = updateCustomer;
exports.deleteCustomer = deleteCustomer;