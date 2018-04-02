'use strict';

import express from 'express';
import path from 'path';

const app = express();

const port = 8080;
// app.use('/', Express.static('public'));
app.use('/', express.static('dist'));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/', 'index.html'));
});

app.listen(port, function() {
  console.log(`Server Started at port ${port}`);
});
