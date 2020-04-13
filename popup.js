function saveLists(rawList) {
    const listUrl = rawList.split(',');
    var listDomain = [];
    listUrl.forEach(url => {
       listDomain.push(getDomain(url));
    });
    save('list', JSON.stringify(listDomain));
    alert("Saved ;-)");
}

/**
 * Load existing list from local storage and fill in the textarea
 */
function displayExistingList() {
    const listDom = document.getElementById('list');
    listDom.value = getExistingList();
}

/**
 * Add event for the save button
 */
document.addEventListener('DOMContentLoaded', function() {
    displayExistingList();

    var checkPageButton = document.getElementById('save');
    checkPageButton.addEventListener('click', function() {
        const listDom = document.getElementById('list');
        saveLists(listDom.value);
    }, false);
}, false);