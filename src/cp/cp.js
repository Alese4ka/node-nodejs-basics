import { spawn } from 'node:child_process';

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', ['./files/script.js', ...args],  {
        stdio: ['inherit', 'inherit', 'inherit', 'ipc']  
      });
};

spawnChildProcess(['someArgument1', 'someArgument2']);