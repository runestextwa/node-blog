const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Hello, World!');
    res.send('<h1>Hello, World!</h1>');
});

module.exports = router;