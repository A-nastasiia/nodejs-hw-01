import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    try{
        const contacts = await readContacts();
        return contacts.length;
    } catch(err){
        console.error('Error in counting contact', err.message);
        return 0;
    }
};

console.log(await countContacts());