const express = require('express');
// chaque route commence par 'api', par rapport au fichier index.js dans le dossier 'routes'
const api = require('./routes');
const app = express();
const port = 8000;

// on défini '/api' au début de l'url pour toutes les routes
app.use('/api', api);

app.listen(port, (err) => {
  if (err) {
      throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});