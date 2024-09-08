const { generateParams } = require("../utils/generateParams");
const emailControler = require("../controllers/email.controller");
const { validateBody } = require("../midelwares/validateBody.midelware");
const { emailSchema } = require("./../schemas/email.schema");

exports.rutes = async (req, res) => {

    const params = generateParams(req.path);
    const method = req.method;

    if (params.length == 1){
        switch (method) {
            case 'GET':
                return await emailControler.getEmailById(req,res,params);
            case 'PUT':
                if (validateBody(req,res,emailSchema)) { return;}
                return await emailControler.updateEmailById(req,res,params);
            case 'POST':
                if (params[1] != "now") { return res.status(404).send({ error: 'Not found' }); }
                if (validateBody(req,res,emailSchema)) { return;}
                return await emailControler.createAndSendEmail(req,res,params);
        }
    } else if (params.length == 0){
        if (method == "POST"){
            if (validateBody(req,res,emailSchema)) { return; }
            return await emailControler.createEmail(req,res);
        }
    }
    return res.status(404).send({ error: 'Not found' });
    
}