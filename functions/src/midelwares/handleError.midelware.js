exports.handleError = (req, res, error) => {
  if (error.message === "DuplicateKey") {
    return res.status(409).send({error: "Email already in use."});
  }
  if (error.message === "NotFound") {
    return res.status(404).send({error: "User not found"});
  }
  return res.status(500).send({error: "Internal Error"});
};
