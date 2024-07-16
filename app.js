const express = require('express');
const bodyParser = require('body-parser');

const inputRoutes = require('./routes/inputRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/input', inputRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
