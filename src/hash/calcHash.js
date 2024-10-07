import path from 'path';
import fs from 'node:fs';
import { fileURLToPath } from 'url';
import crypto from 'crypto'
import stream from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 
const dirPath = path.join(__dirname, './files/fileToCalculateHashFor.txt'); 
const file = fs.createReadStream(dirPath);

const calculateHash = async () => {
    let hash;
    await stream.promises.pipeline(
        file,
        crypto.createHash('sha256').setEncoding('hex'),
        async function (source) {
            hash = (await source.toArray())[0];
        }
    );
    console.log(hash)
};

await calculateHash();