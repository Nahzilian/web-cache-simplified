const isBrowserCompatible = () => { return window.indexedDB };

class CacheSimplified {
    constructor(dbname) {
        this.dbname = dbname;
        if(this.dbExisted()) 
            throw new Error("Database already existed. Considered updating or deleting the database");
        if (!window.indexedDB)
            throw new Error("Your browser does not support IndexedDB")
        this.version = 1;
        this.cacheDB = window.indexedDB.open(this.dbname, this.version);
    }

    getKeyPath(data) {
        if (!data && typeof data !== 'object') return [""]
        return Object.keys(data);
    }

    // Check if db exist
    dbExisted() {
        var dbExists = true;
        var request = window.indexedDB.open(this.dbname);
        request.onupgradeneeded = e => {
            e.target.transaction.abort();
            dbExists = false;
        }
        return dbExists
    }

    addTable(table, data) {
        this.cacheDB.onupgradeneeded = e => {
            const db = e.target.result;
            db.createObjectStore(table, { keyPath: this.getKeyPath(data) });
            this.addData(table, data);
        }
    }

    addData(table, data) {
        this.cacheDB.onupgradeneeded = e => {
            const transaction = e.target.transaction;
            if (data) {
                transaction.oncomplete = e => {
                    const trans = db.transaction(table, 'readwrite');
                    const tb = trans.objectStore(table);
                    tb.add(data);
                }
            }
        }
    }

    // insert
    insert() {

    }
    // update

    updateTable() {

    }

    // delete

}