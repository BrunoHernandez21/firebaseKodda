const {generateParams} = require("./../utils/generateParams");
const customerControler = require("./../controllers/customer.controller");
const {validateBody} = require("./../midelwares/validateBody.midelware");
const {customerSchemaCreate, customerSchemaUpdate} = require("./../schemas/customer.schema");

exports.rutes = async (req, res) => {
  const params = generateParams(req.path);
  const method = req.method;

  if (params.length == 1) {
    switch (method) {
      case "GET":
        return await customerControler.getCustomerById(req, res, params);
      case "PUT":
        if (validateBody(req, res, customerSchemaUpdate)) {
          return;
        }
        return await customerControler.updateCustomerById(req, res, params);
      case "DELETE":
        return await customerControler.deleteCustomerById(req, res, params);
    }
  } else if (params.length == 0 && method == "POST") {
    if (validateBody(req, res, customerSchemaCreate) ) {
      return;
    }
    return await customerControler.createCustomer(req, res);
  }
  return res.status(404).send({error: "Not found"});
};

exports.newCustomer = async (req, res) => {
  const params = generateParams(req.path);
  const method = req.method;

  if (params.length == 0 && method == "POST") {
    if (validateBody(req, res, customerSchemaCreate)) {
      return;
    }
    return await customerControler.createCustomer(req, res);
  }
  return res.status(404).send({error: "Not found"});
};
