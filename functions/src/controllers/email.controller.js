const emailService = require("./../services/email.service");
const {handleError} = require("./../midelwares/handleError.midelware");

const getEmailById = async (req, res, params) => {
  try {
    const email = await emailService.getEmail(params[0]);
    return res.send(email);
  } catch (error) {
    return handleError(req, res, error);
  }
};

const createEmail = async (req, res) => {
  try {
    const id = await emailService.createEmail(req.body);
    return res.send({
      status: "created",
      id: id,
    });
  } catch (error) {
    return handleError(req, res, error);
  }
};

const createAndSendEmail = async (req, res) => {
  try {
    const id = await emailService.createAndSendEmail(req.body);
    return res.send({
      status: "created",
      id: id,
    });
  } catch (error) {
    return handleError(req, res, error);
  }
};

const updateEmailById = async (req, res, params) => {
  const toUpdate = {
    status: req.body.status,
    type: req.body.type,
    userId: req.body.userId,
  };
  try {
    const user = await emailService.updateEmail(toUpdate, params[0]);
    return res.send(user);
  } catch (error) {
    return handleError(req, res, error);
  }
};


exports.getEmailById = getEmailById;
exports.createEmail = createEmail;
exports.updateEmailById = updateEmailById;
exports.createAndSendEmail = createAndSendEmail;
