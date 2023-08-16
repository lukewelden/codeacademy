/* 
Write a route to handle PUT requests to /currencies/:name/countries.

The :name param represents the currency name in the currencies object. 
The updated array of countries that use this currency will be sent in a query.

This route handler should replace the countries array of the correct single-currency object with an updated array from the query. 
It should send the updated array as a response.
*/

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const currencies = {
  diram: {
    countries: ['UAE', 'Morocco'],
  },
  real: {
    countries: ['Brazil'],
  },
  dinar: {
    countries: ['Algeria', 'Bahrain', 'Jordan', 'Kuwait'],
  },
  vatu: {
    countries: ['Vanuatu'],
  },
  shilling: {
    countries: ['Tanzania', 'Uganda', 'Somalia', 'Kenya'],
  },
};

app.put('/currencies/:name/countries', (req, res, next) => {
  const currencyName = req.params.name;
  const currencyCountries = req.query;
  if (currencyName in currencies) {
    currencies[currencyName] = req.query;
    res.send(currencies[currencyName]);
  } else {
    res.status(404).send('Currency not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


