import fs from 'node:fs/promises';
import { exists } from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 
const dirPath = path.join(__dirname, './files/fileToRead.txt'); 

const read = async () => {
    try {
        exists(dirPath, async (e) => {
            console.log('dfkjhdfgkj')
            if (e) {
                const files = await fs.readFile(dirPath, 'utf8');
                console.log(files);
            } else {
                const error = new Error('FS operation failed');
                console.error(error);
            }
        }); 
      } catch (err) {
        console.error(err);
      }
};

await read();