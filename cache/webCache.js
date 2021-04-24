const { isBrowserCompatible } = require('../helper/utils');

class CacheSimplified {
    constructor(dbname) {
        this.version = 1;

        if (typeof window !== "undefined") {
            if (isBrowserCompatible()) throw new Error('Browser is not compatible');
            this.cacheDB = window.indexedDB.open(dbname, this.version);
            this.cacheDB.onupgradeneeded = e => {
                const db = e.target.result
                console.log('Upgraded')
                console.log(e);
            }
    
            this.cacheDB.onsuccess = e => {
                const db = e.target.result;
                // db.createObjectStore();
                console.log('Success')
                console.log(e);
            }
    
            this.cacheDB.onerror = e => {
                console.log('error')
                console.log(e);
            }
        }
    }

    getKeyPath(data) {
        if (data && typeof data !== 'object') return []
        return Object.keys(data);
    }

    addTable(table, data) {
        console.log('here')
        if(this.cacheDB) this.cacheDB.onupgradeneeded = e => {
            console.log('here 2')
            const db = e.target.result;
            const keyPathObj = this.getKeyPath(data);
            db.createObjectStore(table, { keyPath: keyPathObj })
        }
    }


    // Check if db exist

    dbExisted() {

    }

    // insert
    insert() {

    }
    // update

    // delete

}


module.exports = CacheSimplified