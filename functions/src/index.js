const {onRequest} = require("firebase-functions/v2/https");

const customerRouter = require("./rutes/customer.rutes");
const emailLogsRouter = require("./rutes/email.rutes");

exports.customer = onRequest(customerRouter.rutes);
exports.email = onRequest(emailLogsRouter.rutes);
exports.api = onRequest(customerRouter.newCustomer);
