const express = require('express');
const server = express();
const camisasFla = require('./src/data/camisas-flamengo.json');

server.get('/camisas/flamengo', (req, res) => {
    return res.json(camisasFla)
})

server.listen(3000, () => {
    console.log('servidor ok')
});
