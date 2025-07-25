import { readContacts } from "../utils/readContacts";
import { writeContacts } from "../utils/writeContacts";

export const removeLastContact = async () => {
    try{
        const constants = await readContacts();
        if(constants.length === 0){
            console.log('The contact list is empty. There is nothing to delet.');
            return;
        }
        const remove = constants.pop();
        await writeContacts(constants);
        console.log('Delet succeccfully last contact', remove);
    }catch(err){
        console.error('Error of deleting the last contact', err.message);
    }
};

removeLastContact();