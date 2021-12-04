chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ hideAnswers: false });
    chrome.storage.sync.get(["hideAnswers"], async (hideAnswers) => {
        console.log(hideAnswers);
    });
});