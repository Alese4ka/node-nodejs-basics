import {createUnzip} from 'node:zlib';
import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 
const dirPath = path.join(__dirname, './files/fileToCompress.txt'); 
const dirArchivePath = path.join(__dirname, './files/archive.gz'); 

const decompress = async () => {
    const unzip = createUnzip();
    const input = createReadStream(dirArchivePath);
    const output = createWriteStream(dirPath);
    pipeline(input, unzip, output, (error) => {
        if (error) console.log(error);
      });    
};

await decompress();