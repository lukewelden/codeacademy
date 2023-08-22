const express = require('express');
const db = require("./db");
const meetingsRouter = express.Router();

meetingsRouter.get('/', (req, res, next) => {
    const allMeetings = db.getAllFromDatabase('meetings');
    res.status(200).send(allMeetings);
})

meetingsRouter.post('/', (req, res, next) => {
    const meeting = db.createMeeting();
    const meetingAdded = db.addToDatabase('meetings', meeting);
    res.status(201).send(meetingAdded);
})

meetingsRouter.delete('/', (req, res, next) => {
    db.deleteAllFromDatabase('meetings');
    res.status(204).send();
})

module.exports = meetingsRouter;