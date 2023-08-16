/*
 Complete the GET /battlefields/:name route. 
 Send back the battlefield object if a battlefield exists, and set the status 
 to 404 and send an empty response if it does not.
 */

 const express = require('express');
 const app = express();
 
 const PORT = process.env.PORT || 4001;
 
 const battlefields = {
   fortSumter: {
     state: 'SC',
   },
   manassas: {
     state: 'VA',
   },
   gettysburg: {
     state: 'PA',
   },
   antietam: {
     state: 'MD',
   }
 }
 
 app.listen(PORT, () => {
   console.log(`Server is listening on port ${PORT}`);
 });
 
 app.get('/battlefields/:name', (req, res, next) => {
   const battlefieldName = req.params.name;
   if (battlefieldName in battlefields) {
     res.send(battlefields[battlefieldName]);
   } else {
     res.status(404).send(''); 
   }
 });
 