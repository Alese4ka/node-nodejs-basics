import fs from 'node:fs/promises';
import { exists } from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 
const wrongNameFilePath = path.join(__dirname, './files/wrongFilename.txt');
const newNameFilePath = path.join(__dirname, './files/properFilename.md');

const rename = async () => {
    try {
        exists(wrongNameFilePath, async (e) => {
            if (e) {
                exists(newNameFilePath, async (e) => {
                    if (e) {
                        throw new Error('FS operation failed');
                    } else {
                        fs.rename(wrongNameFilePath, newNameFilePath, (err) => {
                            if (err) {
                              console.error(err);
                            }
                          });
                    }
                }); 
            } else {
                throw new Error('FS operation failed');
            }
        }); 
      } catch (err) {
        console.error(err);
      }
};

await rename();