const customerService = require("./../services/customer.service");
const {handleError} = require("./../midelwares/handleError.midelware");

const createCustomer = async (req, res) => {
  try {
    const user = await customerService.createCustomer(req.body);
    return res.send({status: "created", userId: user});
  } catch (error) {
    return handleError(req, res, error);
  }
};

const getCustomerById = async (req, res, params) => {
  try {
    const outData = await customerService.getCustomer(params[0]);
    return res.send(outData);
  } catch (error) {
    return handleError(req, res, error);
  }
};

const updateCustomerById = async (req, res, params) => {
  const toUpdate = {
    name: req.body.name,
    type: req.body.type,
    objective: req.body.objective,
  };
  try {
    const user = await customerService.updateCustomer(toUpdate, params[0]);
    return res.send(user);
  } catch (error) {
    return handleError(req, res, error);
  }
};

const deleteCustomerById = async (req, res, params) => {
  if (params.length != 1) {
    return res.status(400).send({error: "User id is required"});
  }
  try {
    await customerService.deleteCustomer(params[0]);
    return res.send({
      message: `The user ${params[0]} does not exist in the database`,
    });
  } catch (error) {
    return handleError(req, res, error);
  }
};

exports.getCustomerById = getCustomerById;
exports.createCustomer = createCustomer;
exports.updateCustomerById = updateCustomerById;
exports.deleteCustomerById = deleteCustomerById;
