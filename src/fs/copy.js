import fs from 'node:fs/promises';
import { exists } from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 
const folderNamePath = path.join(__dirname, './files');
const folderCopyNamePath = path.join(__dirname, './files_copy'); 

const copy = async () => {
    try {
        exists(folderNamePath, async (e) => {
            if (e) {
                exists(folderCopyNamePath, async (e) => {
                    if (e) {
                        const error = new Error('FS operation failed');
                        console.error(error);
                    } else {
                        await fs.mkdir(folderCopyNamePath);
                        fs.cp(folderNamePath, folderCopyNamePath, { recursive: true }, (err) => {
                            if (err) {
                              console.error(err);
                            }
                          });
                    }
                }); 
            } else {
                const error = new Error('FS operation failed');
                console.error(error);
            }
        }); 
      } catch (err) {
        console.error(err);
      }
};

await copy();