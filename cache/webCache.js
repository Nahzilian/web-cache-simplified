const isBrowserCompatible = () => { return window.indexedDB };

class CacheSimplified {
    constructor(dbname) {
        this.version = 1;
        this.cacheDB = window.indexedDB.open(dbname, this.version);
    }

    getKeyPath(data) {
        if (!data && typeof data !== 'object') return [""]
        return Object.keys(data);
    }

    addTable(table, data) {
        this.cacheDB.onupgradeneeded = e => {
            const db = e.target.result;
            const transaction = e.target.transaction;
            db.createObjectStore(table, { keyPath: this.getKeyPath(data) });

            if (data) {
                transaction.oncomplete = e => {
                    const trans = db.transaction(table, 'readwrite');
                    const tb = trans.objectStore(table);
                    tb.add(data);
                }
            }
        }
    }

    addData(table, data) {

    }


    // Check if db exist

    dbExisted() {

    }

    // insert
    insert() {

    }
    // update

    updateTable() {

    }

    // delete

}