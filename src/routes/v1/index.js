const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.send("V1 Check!");
});

module.exports = router;