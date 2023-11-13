//@desc Get all contacts
//route GET /api/contacts
//@acess public

const getContacts = (req, res) => {
    res.status(200).json({ message: 'Get All Contacts' });
};

//@desc Create New contacts
//route POST /api/contacts
//@acess public
const createContact = (req, res) => {
    console.log("The request body : ",req.body);
    res.status(200).json({ message: 'Create Contacts' });
};

//@desc Get contact
//route GET /api/contacts/:id
//@acess public

const getContact = (req, res) => {
    res.status(200).json({ message: `Get Contacts for ${req.params.id}` });
};

//@desc Update contacts
//route POST /api/contacts/:id
//@acess public

const updateContact = (req, res) => {
    res.status(200).json({ message: `Update Contacts for ${req.params.id}` });
};

//@desc Delete contact
//route DELETE /api/contacts/:id
//@acess public

const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete Contacts for ${req.params.id}` });
};

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
};
