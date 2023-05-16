const { Contact } = require("../../models");

const listContacts = async (req, res, next) => {
    const { _id: owner } = req.user;
    console.log(req.user)
    const { page = 1, limit = 20, favorite } = req.query;
    const queryParams = favorite ? { owner, favorite: favorite } : { owner };
    const skip = (page - 1) * limit;
    const result = await Contact.find(queryParams, "-createdAt -updatedAt", { skip, limit }).populate("owner", "email subscription");
    res.json(result);
}

module.exports = listContacts;