const express = require('express')
const ctrl = require("../../controllers/contacts");
const { addSchema, updateFavoriteSchema } = require("../../models");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const contactsRouter = express.Router()

contactsRouter.get('/', authenticate, ctrl.listContacts)

contactsRouter.get('/:contactId', authenticate, ctrl.getContactById)

contactsRouter.post('/', authenticate, validateBody(addSchema), ctrl.addContact)

contactsRouter.put('/:contactId', authenticate, validateBody(addSchema), ctrl.updateContact)

contactsRouter.patch("/:contactId/favorite", authenticate, isValidId, validateBody(updateFavoriteSchema), ctrl.updateFavorite);

contactsRouter.delete('/:contactId', authenticate, ctrl.removeContact)


module.exports = contactsRouter
