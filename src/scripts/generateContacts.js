import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import {createFakeContact} from "../utils/createFakeContact.js";

const generateContacts = async (number) => {
    try {
        const existingContacts = await readContacts() || [];
        const newContacts = Array.from({ length: number }, () => createFakeContact());
        const updateContacts = [...existingContacts, ...newContacts];
        await writeContacts(updateContacs);

        console.log(`${number} contact successfully generated and added.`);
    } catch(err){
        console.error('Error of generating contact', err.message);
    }
};

generateContacts(5);
