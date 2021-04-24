const express = require('express');
const app = express();
const CacheSimplified = require('./cache/webCache');

let cacheDB = new CacheSimplified('testDB');

let obj = {
    name: "lol",
    age: 20
}

app.get('/', (req, res) => {
    res.status(200).send('Hola');
});
cacheDB.addTable('testTab', obj);

  
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));