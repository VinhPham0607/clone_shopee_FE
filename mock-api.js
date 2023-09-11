const express = require('express');
const apiMocker = require('connect-api-mocker');
const cors = require('cors');
const port = 3001; 
const app = express();
app.use(cors());
 
app.use('/api', apiMocker('mock-api'));
 
app.listen(port, () => console.log(`Example app listening on port ${port}!`));