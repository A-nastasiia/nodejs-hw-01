import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
    try{
        const jsonData = JSON.stringify(updatedContacts, null, 2);
        await fs.writeFile(PATH_DB, jsonData, 'utf-8');
    } catch (err) {
        console.error('Error whis saving contack', err.message);
    }
};