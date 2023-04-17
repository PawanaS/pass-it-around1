const express = require('express');
const app = express();

// Home page route
app.get('/', (req, res) => {
  res.send(`
    <h1>99 Bottles of beer on the wall</h1>
    <a href="/98">take one down, pass it around</a>
  `);
});

// Number of bottles route
app.get('/:number_of_bottles', (req, res) => {
  const number_of_bottles = parseInt(req.params.number_of_bottles);

  if (number_of_bottles === 0) {
    res.send(`
      <h1>No more bottles of beer on the wall</h1>
      <a href="/">Start over</a>
    `);
  } else {
    const next_bottle = number_of_bottles - 1;
    res.send(`
      <h1>${number_of_bottles} Bottles of beer on the wall</h1>
      <a href="/${next_bottle}">take one down, pass it around</a>
    `);
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});