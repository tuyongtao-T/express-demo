const express = require('express');
const router = express.Router();
const db = require('../config/db')
/* GET users listing. */
router.post('/login', function (req, res, next) {
    let data = {
        name: req.body.userName,
        password: req.body.password
    }
    db.findOne('test2',data,(err,result)=> {
        if(result.length === 0) {
            res.status(200).send('账号不存在或密码错误')
        }else {
            res.status(200).send('查询成功')
        }
    });
});


router.post('/register', function (req, res, next) {
    let data = {
        name: req.body.userName,
        password: req.body.password
    }
    // db.insertOne('test2',data).then(()=> {
    //     res.status(200).send('插入成功')
    // })
    db.insertOne('test2',data).then(()=> {
        res.status(200).send('插入成功')
    })

});

module.exports = router;
