import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 
const dirPath = path.join(__dirname, './files/fileToRead.txt'); 
const readable = fs.createReadStream(dirPath);

const read = async () => {
    readable.on('data', (chunk) => {
        process.stdout.write(chunk);
    }); 
};

await read();