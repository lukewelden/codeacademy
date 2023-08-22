const express = require('express');
const db = require("./db");
const minionsRouter = express.Router();
const workRouter = require('./work');

minionsRouter.param('minionId', (req, res, next, id) => {
    req.id = id;
    next();
});

minionsRouter.use('/:minionId/work', workRouter);

minionsRouter.get('/', (req, res, next) => {
    const allMinions = db.getAllFromDatabase('minions');
    res.status(200).send(allMinions);
})

minionsRouter.post('/', (req, res, next) => {
    const newMinion = db.addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
})

minionsRouter.get('/:minionId', (req, res, next) => {
    const minion = db.getFromDatabaseById('minions', req.id);
    if (minion) {
        res.status(200).send(minion);
    } else {
        res.status(404).send('Minion not found');
    }
})

minionsRouter.put('/:minionId', (req, res, next) => {
    const updatedMinion = db.updateInstanceInDatabase('minions', req.body);
    if (updatedMinion) {
        res.status(200).send(updatedMinion);
    } else {
        res.status(404).send('Minion not found');
    }
})

minionsRouter.delete('/:minionId', (req, res, next) => {
    console.log(`the id sent is ${req.id} and is of type ${typeof req.id}`);
    const deletedMinion = db.deleteFromDatabasebyId('minions', req.id);
    console.log(`deleteFromDatabasebyId returned: ${deletedMinion}`);
    if (deletedMinion) {
        res.status(204).send();
    } else {
        res.status(404).send('Minion not found');
    }
})

module.exports = minionsRouter;