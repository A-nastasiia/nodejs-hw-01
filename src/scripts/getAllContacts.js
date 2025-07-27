import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    try{
        const contacts = await readContacts();
        return contacts; 
    } catch(err){
        console.error('Error of reading contacts', err.message);
        return [];
    }
};

console.log(await getAllContacts());