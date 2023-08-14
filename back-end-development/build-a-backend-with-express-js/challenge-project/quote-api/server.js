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

app.put('/api/quotes/:id', (req, res, next) => {
    const qId = parseInt(req.params.id);
    const updateQuote = req.query.quote;
    const findIndex = quotes.findIndex(quote => quote.id === qId);

    if (findIndex !== -1 && updateQuote) {
        console.log('Quote found!');
        quotes[findIndex].quote = updateQuote;
        res.status(200).send(`Successfully modified quote /\n New quote: ${quotes[findIndex].quote}`)
    } else if (findIndex === -1){
        console.log('Quote not found');
        res.status(404).send('Quote not found!');
    } else {
        console.log('Blank query')
        res.status(400).send('Must add quote query i.e. ?quote="new quote"');
    }
});

app.delete('/api/quotes/:id', (req, res, next) => {
    const qId = parseInt(req.params.id);
    const findIndex = quotes.findIndex(quote => quote.id === qId);

    if (findIndex !== -1 ) {
        console.log('Quote found!');
        const deletedQuote = quotes.splice(findIndex, 1);
        res.status(200).send(`Successfully deleted. \n id: ${deletedQuote[0].id}  \n quote: ${deletedQuote[0].quote} \n by: ${deletedQuote[0].person}`);
    } else {
        console.log('Quote not found');
        res.status(404).send('Quote not found!');
    }
});


