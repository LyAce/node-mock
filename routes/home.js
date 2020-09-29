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
                'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
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
        data: [
            {
                'id': '1',
                'name': '北区食堂',
                'stores': [
                    {
                        'storeID': '1',
                        'storeImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                        'storeName': '食堂窗口',
                        'state': 1,
                        'sMoney': '0.01',
                        'pMoney': '4.00',
                        'foodList': [
                            {
                                'foodImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                                'foodName': '馄饨',
                                'foodPrice': '0.05'
                            },
                            {
                                'foodImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                                'foodName': '饺子',
                                'foodPrice': '5.00'
                            },
                            {
                                'foodImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                                'foodName': '饺子',
                                'foodPrice': '5.00'
                            }
                        ]
                    },
                    {
                        'storeID': '1',
                        'storeImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                        'storeName': '食堂窗口',
                        'state': 1,
                        'sMoney': '0.01',
                        'pMoney': '4.00',
                        'foodList': [
                            {
                                'foodImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                                'foodName': '馄饨',
                                'foodPrice': '0.05'
                            },
                            {
                                'foodImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                                'foodName': '饺子',
                                'foodPrice': '5.00'
                            },
                            {
                                'foodImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                                'foodName': '饺子',
                                'foodPrice': '5.00'
                            }
                        ]
                    },
                    {
                        'storeID': '1',
                        'storeImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                        'storeName': '食堂窗口',
                        'state': 1,
                        'sMoney': '0.01',
                        'pMoney': '4.00',
                        'foodList': [
                            {
                                'foodImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                                'foodName': '馄饨',
                                'foodPrice': '0.05'
                            },
                            {
                                'foodImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                                'foodName': '饺子',
                                'foodPrice': '5.00'
                            },
                            {
                                'foodImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                                'foodName': '饺子',
                                'foodPrice': '5.00'
                            }
                        ]
                    },
                    {
                        'storeID': '1',
                        'storeImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                        'storeName': '食堂窗口',
                        'state': 1,
                        'sMoney': '0.01',
                        'pMoney': '4.00',
                        'foodList': [
                            {
                                'foodImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                                'foodName': '馄饨',
                                'foodPrice': '0.05'
                            },
                            {
                                'foodImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                                'foodName': '饺子',
                                'foodPrice': '5.00'
                            },
                            {
                                'foodImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                                'foodName': '饺子',
                                'foodPrice': '5.00'
                            }
                        ]
                    },
                    {
                        'storeID': '1',
                        'storeImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                        'storeName': '食堂窗口',
                        'state': 1,
                        'sMoney': '0.01',
                        'pMoney': '4.00',
                        'foodList': [
                            {
                                'foodImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                                'foodName': '馄饨',
                                'foodPrice': '0.05'
                            },
                            {
                                'foodImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                                'foodName': '饺子',
                                'foodPrice': '5.00'
                            },
                            {
                                'foodImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                                'foodName': '饺子',
                                'foodPrice': '5.00'
                            }
                        ]
                    }
                ]
            },
            {
                'id': '2',
                'name': '南区食堂',
                'stores': [
                    {
                        'storeID': '2',
                        'storeImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                        'storeName': '食堂窗口',
                        'state': 1,
                        'sMoney': '0.01',
                        'pMoney': '4.00',
                        'foodList': [
                            {
                                'foodImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                                'foodName': '馄饨',
                                'foodPrice': '0.05'
                            },
                            {
                                'foodImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                                'foodName': '饺子',
                                'foodPrice': '5.00'
                            },
                            {
                                'foodImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                                'foodName': '饺子',
                                'foodPrice': '5.00'
                            }
                        ]
                    },
                    {
                        'storeID': '2',
                        'storeImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                        'storeName': '食堂窗口',
                        'state': 1,
                        'sMoney': '0.01',
                        'pMoney': '4.00',
                        'foodList': [
                            {
                                'foodImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                                'foodName': '馄饨',
                                'foodPrice': '0.05'
                            },
                            {
                                'foodImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                                'foodName': '饺子',
                                'foodPrice': '5.00'
                            },
                            {
                                'foodImg': 'http://test-ins24-cdn-oss.51zxtx.com/fw375pvui8c58ghcbz1bk0z0',
                                'foodName': '饺子',
                                'foodPrice': '5.00'
                            }
                        ]
                    }
                ]
            }
        ]
    };
    res.json(data);
});

module.exports = router;
