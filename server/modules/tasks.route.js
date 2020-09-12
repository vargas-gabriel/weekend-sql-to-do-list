//requires 
const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
console.log('/tasks GET hit');
res.send('scream');
})//end GET
router.post('/',(req, res)=>{
    console.log('/tasks POST hit:', req.body);
    res.send('purr');
    })//end POST
//exports
module.exports = router;