import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    try{
        const existingContacts = await readContacts() || [];
        const newContacts = createFakeContact();
        const updateContacs = [...existingContacts, newContacts];
        await writeContacts(updateContacs);
        console.log('Successfully added one contact', newContacts);
    } catch(err){
        console.error('Error of adding contact', err.massage);
    }
};

addOneContact();