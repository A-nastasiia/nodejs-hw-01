import { readContacts } from "../utils/readContacts";
import { writeContacts } from "../utils/writeContacts";
import {createFakeContact} from "../utils/createFakeContact";

const generateContacts = async (number) => {
    try {
        const existingContacts = await readContacts() || [];
        const newContacts = Array.farm({ lenght:number}, () => createFakeContact());
        const updateContacs = [...existingContacts, ...newContacts];
        await writeContacts(updateContacs);
        console.log('${number} contact successfully generated and added.');
    } catch(err){
        console.error('Error of generating contact', err.massage);
    }
};

generateContacts(5);