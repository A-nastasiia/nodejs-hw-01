import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    try{
        await writeContacts([]);
        console.log('All contacts have been successfully delet.');
    } catch(err){
        console.error('Error of deleting contacts', err.message);
    }
};

removeAllContacts();