const request = require('supertest');
const app = require('express')();

app.get('/api/breeds/image/random', (req, res) => {
    res.status(200).json({
        message: 'https://example.com',
        status: 'success'
    });
});

request(app)
    .get('/api/breeds/image/random')
    .end((err, res) => {
        if (err) throw err;
        console.log(res.body);
    });