var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getData', function (req, res, next) {
    let data = {
        success: true,
        code: '1111',
        data: [
            {'id': '1', 'name': '图片一', 'imgSrc': 'https://699pic.com/tupian-501667784.html'},
            {'id': '2', 'name': '图片二', 'imgSrc': 'https://699pic.com/tupian-501667782.html'},
            {'id': '3', 'name': '图片三', 'imgSrc': 'https://699pic.com/tupian-501666441.html'},
        ]
    };
    res.json(data);
});

module.exports = router;
