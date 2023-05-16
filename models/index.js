const { Contact, addSchema, updateFavoriteSchema } = require("./contact");
const { User, registerSchema, loginSchema, subscriptionSchema } = require("./user");

module.exports = {
    Contact,
    addSchema,
    updateFavoriteSchema,
    User,
    registerSchema,
    loginSchema,
    subscriptionSchema,
};