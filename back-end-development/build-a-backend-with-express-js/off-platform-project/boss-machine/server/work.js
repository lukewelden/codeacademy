const express = require('express');
const db = require("./db");
const workRouter = express.Router();

workRouter.param('workId', (req, res, next, id) => {
    req.workId = id;
    next();
});

workRouter.get('/', (req, res, next) => {
    const work = db.getFromDatabaseById('work', req.workId);
    if (work) {
        res.status(200).send(work);
    } else {
        res.status(404).send('Minion has no work');
    }
});

workRouter.post('/', (req, res, next) => {

});

workRouter.put('/:workId', (req, res, next) => {

});

workRouter.delete('/:workId', (req, res, next) => {

});

module.exports = workRouter;