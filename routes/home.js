var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/getData', function (req, res, next) {
    let data = {
        success: true,
        code: '1001',
        data: {
            'userName': '李二',
            'schoolName': '中南名族大学',
            'bannerImg': [
                'https://img.17sucai.com/upload/646745/2016-11-04/158276e1ee8858d26ca6359022049566.jpg?x-oss-process=style/big',
                'https://img.17sucai.com/upload/646745/2016-11-04/158276e1ee8858d26ca6359022049566.jpg?x-oss-process=style/big',
            ],
            'dinningList': [
                {'id': 1, 'name': '北区食堂'},
                {'id': 2, 'name': '南区食堂'},
            ]

        }
    };
    res.json(data);
});

router.post('/getStores', function (req, res, next) {
    let data = {
        success: true,
        code: '1001',
        data: {
            'storeList': [
                {
                    'storeID':'1',
                    'storeImg': '',
                    'storeName': '',
                    'state': 1,
                    'sMoney': '0.01',
                    'pMoney': '4.00',
                    'foodList': [
                        {
                            'foodImg': '',
                            'foodName': '馄饨',
                            'foodPrice': '0.05'
                        },
                        {
                            'foodImg': '',
                            'foodName': '饺子',
                            'foodPrice': '5.00'
                        },
                        {
                            'foodImg': '',
                            'foodName': '饺子',
                            'foodPrice': '5.00'
                        }
                    ]
                },
                {
                    'storeID':'1',
                    'storeImg': '',
                    'storeName': '',
                    'state': 1,
                    'sMoney': '0.01',
                    'pMoney': '4.00',
                    'foodList': [
                        {
                            'foodImg': '',
                            'foodName': '馄饨',
                            'foodPrice': '0.05'
                        },
                        {
                            'foodImg': '',
                            'foodName': '饺子',
                            'foodPrice': '5.00'
                        },
                        {
                            'foodImg': '',
                            'foodName': '饺子',
                            'foodPrice': '5.00'
                        }
                    ]
                },
                {
                    'storeID':'1',
                    'storeImg': '',
                    'storeName': '',
                    'state': 1,
                    'sMoney': '0.01',
                    'pMoney': '4.00',
                    'foodList': [
                        {
                            'foodImg': '',
                            'foodName': '馄饨',
                            'foodPrice': '0.05'
                        },
                        {
                            'foodImg': '',
                            'foodName': '饺子',
                            'foodPrice': '5.00'
                        },
                        {
                            'foodImg': '',
                            'foodName': '饺子',
                            'foodPrice': '5.00'
                        }
                    ]
                },
                {
                    'storeID':'1',
                    'storeImg': '',
                    'storeName': '',
                    'state': 1,
                    'sMoney': '0.01',
                    'pMoney': '4.00',
                    'foodList': [
                        {
                            'foodImg': '',
                            'foodName': '馄饨',
                            'foodPrice': '0.05'
                        },
                        {
                            'foodImg': '',
                            'foodName': '饺子',
                            'foodPrice': '5.00'
                        },
                        {
                            'foodImg': '',
                            'foodName': '饺子',
                            'foodPrice': '5.00'
                        }
                    ]
                },
                {
                    'storeID':'1',
                    'storeImg': '',
                    'storeName': '',
                    'state': 1,
                    'sMoney': '0.01',
                    'pMoney': '4.00',
                    'foodList': [
                        {
                            'foodImg': '',
                            'foodName': '馄饨',
                            'foodPrice': '0.05'
                        },
                        {
                            'foodImg': '',
                            'foodName': '饺子',
                            'foodPrice': '5.00'
                        },
                        {
                            'foodImg': '',
                            'foodName': '饺子',
                            'foodPrice': '5.00'
                        }
                    ]
                },
                {
                    'storeID':'2',
                    'storeImg': '',
                    'storeName': '',
                    'state': 1,
                    'sMoney': '0.01',
                    'pMoney': '4.00',
                    'foodList': [
                        {
                            'foodImg': '',
                            'foodName': '馄饨',
                            'foodPrice': '0.05'
                        },
                        {
                            'foodImg': '',
                            'foodName': '饺子',
                            'foodPrice': '5.00'
                        },
                        {
                            'foodImg': '',
                            'foodName': '饺子',
                            'foodPrice': '5.00'
                        }
                    ]
                },
                {
                    'storeID':'2',
                    'storeImg': '',
                    'storeName': '',
                    'state': 1,
                    'sMoney': '0.01',
                    'pMoney': '4.00',
                    'foodList': [
                        {
                            'foodImg': '',
                            'foodName': '馄饨',
                            'foodPrice': '0.05'
                        },
                        {
                            'foodImg': '',
                            'foodName': '饺子',
                            'foodPrice': '5.00'
                        },
                        {
                            'foodImg': '',
                            'foodName': '饺子',
                            'foodPrice': '5.00'
                        }
                    ]
                }
            ],
            'dinningList': [
                {'id': '1', 'name': '北区食堂'},
                {'id': '2', 'name': '南区食堂'},
            ]

        }
    };
    res.json(data);
});

module.exports = router;
