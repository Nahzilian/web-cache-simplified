const isBrowserCompatible = () => { return window.indexedDB };

module.exports = { isBrowserCompatible }