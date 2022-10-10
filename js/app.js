// console.log('Fear is the mind killer.');

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('This that pink venom.')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
})