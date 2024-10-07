const parseArgs = () => {
    const indx = process.argv.findIndex((item) => {
        return item.includes('--');
    });

    const argArr = process.argv.slice(indx);

    const argvStringArr = [];    
    const propArr = [];
    const valueArr = [];
    argArr.forEach((arg) => {
        if(arg.includes('--')) {
            propArr.push(arg);
        } else {
            valueArr.push(arg);
        }
    })
    propArr.forEach((prop, i) => {
        valueArr.forEach((value, ind) => {
            if(i === ind) {
                argvStringArr.push(`${prop} is ${value}`);
            }
        })
    })

    console.log(argvStringArr.join(', '));
};

parseArgs();