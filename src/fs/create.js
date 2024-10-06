import fs from 'node:fs/promises';
import { exists } from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 
const dirPath = path.join(__dirname, './files/fresh.txt'); 

const create = async () => {
    try {
        const content = 'I am fresh and young';

        exists(dirPath, async (e) => {
            if (e) {
                const error = new Error('FS operation failed');
                console.error(error);
            } else {
                await fs.writeFile(dirPath, content);
            }
        }); 
      } catch (err) {
        console.error(err);
      }
};

await create();