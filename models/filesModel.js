const fs = require('fs');

const files = {
    A: [],
    B: [],
    C: [],
    D: []
};

const FILE_PATHS = {
    A: './A.txt',
    B: './B.txt',
    C: './C.txt',
    D: './D.txt'
};

// Initialize files if they don't exist
Object.keys(FILE_PATHS).forEach(file => {
    if (!fs.existsSync(FILE_PATHS[file])) {
        fs.writeFileSync(FILE_PATHS[file], '');
    }
});

// Modified storeResult function to ensure unique storage
const storeResult = (fileKey, number) => {
    if (!files[fileKey].includes(number)) {
        files[fileKey].push(number);
        fs.appendFileSync(FILE_PATHS[fileKey], number + '\n');
    }
};

const checkCompletion = () => {
    return Object.keys(files).every(key => files[key].length > 0);
};

const getFiles = () => {
    const result = {};
    Object.keys(FILE_PATHS).forEach(file => {
        const content = fs.readFileSync(FILE_PATHS[file], 'utf8');
        result[file] = content ? content.trim().split('\n').map(Number) : [];
    });
    return result;
};

module.exports = {
    storeResult,
    checkCompletion,
    getFiles
};
