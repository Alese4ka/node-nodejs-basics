import fs from 'node:fs/promises';
import { exists } from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 
const dirPath = path.join(__dirname, './files/fileToRemove.txt');

const remove = async () => {
    try {
        exists(dirPath, async (e) => {
            if (e) {
                fs.rm(dirPath);
            } else {
                const error = new Error('FS operation failed');
                console.error(error);
            }
        }); 
      } catch (err) {
        console.error(err);
      }
};

await remove();