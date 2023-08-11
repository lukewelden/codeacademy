const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Started Listening on port: ${PORT}`);
})

app.get('/api/quotes/random', (req, res, next) => {
    const randQuote = {quote: getRandomElement(quotes)};
    console.log(randQuote);
    res.send(randQuote);
});

app.get('/api/quotes/', (req, res, next) => {
    // TODO: Logic to detect whether a query is present
    const personQuery = req.query.person;

    if (personQuery) {
        // returns only quotes from person in query string
        const filteredQuotes = quotes.filter(quote => quote.person === personQuery);
        const response = { quotes: filteredQuotes };
        res.send(response);
    } else {
        // returns all quotes
        const response = { quotes: quotes }
        res.send(response);
    }
});

app.post('/api/quotes', (req, res, next) => {
    const addQuote = req.query.quote;
    const addPerson = req.query.person;

    if (addQuote && addPerson) {
        const newQuote = {quote: addQuote, person: addPerson};
        quotes.push(newQuote);
        const response = {quote: newQuote};
        res.send(response);
    } else {
        res.status(400).send('You must supply a valid quote and person');
    }
});
