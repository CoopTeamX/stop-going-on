chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tab) {
        const domain = getDomain(tab.url);
        const previousDomain = get('previous-domain');

        if(domain !== previousDomain) {
            const list = getExistingList();
            if(list.includes(domain) > 0) {
                alert("Are you sure you don't want to do anything else? ;-)");
            }
        }
        save('previous-domain', domain);
    }
);