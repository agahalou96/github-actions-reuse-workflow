const express = require('express');
const app = express();

app.get('/demoApp', (req, res) => {
    res.status(200).send('Deployment successful to web app');
});

module.exports = app;
