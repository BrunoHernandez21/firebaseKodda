const emailRepository = require('./../repository/email.repository');
const logger = require("firebase-functions/logger");

const createEmail = async (data) => {
    const time = (new Date()).toISOString();
    emailModel = {
        ...data,
        createdAt: time,
        updatedAt: time,
    }
    const recordRef = await emailRepository.createEmail(emailModel); 
    return recordRef.key;
}
const createAndSendEmail = async (data) => {
    const time = (new Date()).toISOString();
    emailModel = {
        ...data,
        createdAt: time,
        updatedAt: time,
        sentAt: time,
    }
    const response = await emailRepository.createEmail(emailModel); 
    // send email
    return response;
}
const getEmail = async (id) => {
    const snapshotOut = await emailRepository.getEmail(id); 
    if (!snapshotOut.exists()) throw new Error("NotFound");
    return {...snapshotOut.val(),id: snapshotOut.key};
}
const updateEmail = async (data,id) => {
    const snapshotCustomer = await emailRepository.getEmail(id);
    if (!snapshotCustomer.exists()) throw new Error("NotFound");
    const snapshotOut = await emailRepository.updateEmail(id,data); 
    return {...snapshotOut.val(),id: snapshotOut.key};
}

exports.createEmail = createEmail;
exports.getEmail = getEmail;
exports.updateEmail = updateEmail;
exports.createAndSendEmail = createAndSendEmail;
