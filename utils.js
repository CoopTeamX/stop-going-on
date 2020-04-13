const prefixKey = 'stop-going-on-';

function getDomain(url) {
    return url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0];
}

function save(key, value) {
    window.localStorage.setItem(prefixKey + key, value);
}

function get(key) {
    return window.localStorage.getItem(prefixKey + key);
}

/**
 * @returns array of string containing domain url
 */
function getExistingList() {
    var existingList = null !== get('list') ? get('list') : '';
    existingList = existingList.replace(/\[/g,'');
    existingList = existingList.replace(/\]/g,'');
    existingList = existingList.replace(/"/g,'');
    return existingList.split(',');
}
