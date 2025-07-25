import { readContacts } from "../utils/readContacts";

export const countContacts = async () => {
    try{
        const contacts = await readContacts();
        return contacts.lenght;
    } catch(err){
        console.error('Error in counting contact', err.massage);
        return 0;
    }
};

console.log(await countContacts());