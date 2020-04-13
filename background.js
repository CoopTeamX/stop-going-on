chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tab) {
        const domain = getDomain(tab.url);
        const previousDomain = get('previous-domain');

        if(domain !== previousDomain) {
            const list = getExistingList();
            if(list.includes(domain) > 0) {
                const quit = confirm("Hey, maybe we should go somewhere else? We quit? ;-)");
                if(quit) {
                    chrome.tabs.remove(tab.id, function() { });
                }
            }
        }
        save('previous-domain', domain);
    }
);