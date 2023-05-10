const express = require('express')
const ctrl = require("../../controllers/contacts");
const { schemas } = require("../../models/contact");

const { validateBody, isValidId } = require("../../middlewares");
const router = express.Router()

router.get('/', ctrl.listContacts)

router.get('/:contactId', ctrl.getContactById)

router.post('/', validateBody(schemas.addSchema), ctrl.addContact)

router.put('/:contactId', validateBody(schemas.addSchema), ctrl.updateContact)

router.patch("/:contactId/favorite", isValidId, validateBody(schemas.updateFavoriteSchema), ctrl.updateFavorite);

router.delete('/:contactId', ctrl.removeContact)

module.exports = router
