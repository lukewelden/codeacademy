/*
Write a route to handle DELETE requests to /puddings/:flavor. 
It should delete the correct pudding and send a 204 response if the pudding
 name exists and send a 404 response if it does not.

You can use the helper functions findPuddingIndex to find the index of the 
pudding by flavor and deletePuddingAtIndex to delete a pudding from the
 puddingFlavors array by index.
*/

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const puddingFlavors = ['chocolate', 'banana', 'butterscotch', 'pistachio'];

const findPuddingIndex = (name) => {
  return puddingFlavors.indexOf(name);
}

const deletePuddingAtIndex = (index) => {
  puddingFlavors.splice(index, 1);
}

// Your code here!
app.delete('/puddings/:flavor', (req, res, next)=>{
  const pudIndex = findPuddingIndex(req.params.flavor);
  if (pudIndex !== -1) {
    deletePuddingAtIndex(pudIndex);
    res.status(204).send('Pudding deleted.');
  } else {
    res.status(404).send('Pudding not found.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

