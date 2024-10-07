const parseEnv = () => {
    let envVarsString = '';
    Object.entries(process.env).forEach(([key, value]) => {
        envVarsString += `RSS_${key}=${value}; `;
    });
    console.log(envVarsString);
};

parseEnv();