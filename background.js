let currentTab = "";
let startTime = Date.now();

chrome.tabs.onActivated.addListener(async (activeInfo) => {

    let tab = await chrome.tabs.get(activeInfo.tabId);

    if (tab.url) {

        let endTime = Date.now();
        let timeSpent = endTime - startTime;

        console.log(currentTab + " : " + timeSpent);

        currentTab = new URL(tab.url).hostname;

        startTime = Date.now();
    }
});