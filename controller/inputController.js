const { storeResult, checkCompletion, getFiles } = require('../models/filesModel');

const handleInput = (req, res) => {
    const { number } = req.body;
    
    if (number < 1 || number > 25) {
        return res.status(400).json({ error: 'Number must be between 1 and 25' });
    }

    const result = number * 7;

    let fileKey;
    if (result > 140) {
        fileKey = 'A';
    } else if (result > 100) {
        fileKey = 'B';
    } else if (result > 60) {
        fileKey = 'C';
    } else {
        fileKey = 'D';
    }

    storeResult(fileKey, number);  // Store the original number

    if (checkCompletion()) {
        return res.status(200).json({ message: 'All files are populated. Process complete.', files: getFiles() });
    }

    res.status(200).json({ message: `Number ${number} processed and stored in file ${fileKey}.`, result });
};

const getAllFiles = (req, res) => {
    res.status(200).json(getFiles());
};

module.exports = {
    handleInput,
    getAllFiles
};
