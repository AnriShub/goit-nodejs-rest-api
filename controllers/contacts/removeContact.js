const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const removeContact = async (req, res, next) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndRemove(contactId);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json({
        message: "Delete success"
    })
}

module.exports = removeContact;