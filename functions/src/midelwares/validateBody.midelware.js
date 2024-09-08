exports.validateBody = (req,res,schema) => {
    const { error, data } = schema.validate(req.body);
    schema.validate()
    if (error){
        res.status(400).send({ error });
        return true;
    }
    return false;
}