const express = require('express');
const db = require("./db");
const ideasRouter = express.Router();
const checkMillionDollarIdea = require('./checkMillionDollarIdea');

ideasRouter.param('ideaId', (req, res, next, id) => {
    req.id = id;
    next();
})

ideasRouter.get('/', (req, res, next) => {
    const allIdeas = db.getAllFromDatabase('ideas');
    res.status(200).send(allIdeas);
})

ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    const newMinion = db.addToDatabase('ideas', req.body);
    res.status(201).send(newMinion);
})

ideasRouter.get('/:ideaId', (req, res, next) => {
    const idea = db.getFromDatabaseById('ideas', req.id);
    if (idea) {
        res.status(200).send(idea);
    } else {
        res.status(404).send('Minion not found');
    }
})

ideasRouter.put('/:ideaId', (req, res, next) => {
    const updatedIdea = db.updateInstanceInDatabase('ideas', req.body);
    if (updatedIdea) {
        res.status(200).send(updatedIdea);
    } else {
        res.status(404).send('Minion not found');
    }
})

ideasRouter.delete('/:ideaId', (req, res, next) => {
    console.log(`the id sent is ${req.id} and is of type ${typeof req.id}`);
    const deletedMinion = db.deleteFromDatabasebyId('ideas', req.id);
    console.log(`deleteFromDatabasebyId returned: ${deletedMinion}`);
    if (deletedMinion) {
        res.status(204).send();
    } else {
        res.status(404).send('Minion not found');
    }
})

module.exports = ideasRouter;