import { createGzip } from 'node:zlib';
import path from 'path';
import { pipeline } from 'node:stream';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 
const dirPath = path.join(__dirname, './files/fileToCompress.txt'); 
const dirArchivePath = path.join(__dirname, './files/archive.gz'); 

const compress = async () => {
      const gzip = createGzip();
      const source = createReadStream(dirPath);
      const destination = createWriteStream(dirArchivePath);
      pipeline(source, gzip, destination, (error) => {
        if (error) console.log(error);
      });
};

await compress();