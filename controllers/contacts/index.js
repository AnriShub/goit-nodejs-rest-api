const { ctrlWrapper } = require("../../helpers");

const listContacts = require('./listContacts')
const getContactById = require('./getContactById')
const removeContact = require('./removeContact')
const addContact = require('./addContact')
const updateContact = require('./updateContact')
const updateFavorite = require('./updateFavorite')

module.exports = {
    listContacts: ctrlWrapper(listContacts),
    getContactById: ctrlWrapper(getContactById),
    removeContact: ctrlWrapper(removeContact),
    addContact: ctrlWrapper(addContact),
    updateContact: ctrlWrapper(updateContact),
    updateFavorite: ctrlWrapper(updateFavorite),
}