const CacheSimplified = require('./cache/webCache');

let cacheDB = new CacheSimplified('testDB');

let obj = {
    name: "lol",
    age: 20
}

cacheDB.addTable('testTab', obj);
