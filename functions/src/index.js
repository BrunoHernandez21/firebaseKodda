/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");

const customerRouter = require('./rutes/customer.rutes');
const emailLogsRouter = require('./rutes/email.rutes');
// const logger = require("firebase-functions/logger");

exports.customer = onRequest(customerRouter.rutes);
exports.email = onRequest(emailLogsRouter.rutes);
exports.newCustomer = onRequest(customerRouter.newCustomer);
