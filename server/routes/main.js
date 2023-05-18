const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    const info = {
        name: 'nodeJS blog',
        description: "that is just a description for testing purposes nothing to see here"
    }

    res.render('index', info);

});






module.exports = router;