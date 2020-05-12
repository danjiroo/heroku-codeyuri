const express = require('express');
const path = require('path');

// console.log(require('dotenv').config({debug: true}))
require('dotenv').config();

const app = express();

// bodyparser - middleware
app.use(express.json());

// serve static assets - productions
if(process.env.NODE_ENV === 'production') {
    // set static folder
    // app.use(express.static('client/dist'));
    app.use(express.static('client/dist', {
        maxAge: '1y' // caching!
    }));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    });
}

// process env for deployment, 5000 for dev
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));