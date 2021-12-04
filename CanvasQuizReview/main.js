let activate = document.getElementById("activate");

activate.addEventListener("click", async () => {
    console.log("injecting css");
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.storage.sync.get(["hideAnswers"], async ({hideAnswers}) => {
        console.log(hideAnswers);
        const options = {
            target: {
                tabId: tab.id
            },
            files: ["canvas.css"]
        };

        if (hideAnswers)
        {
            chrome.scripting.removeCSS(
                options
            );
            activate.innerText = "Activate";
        }
        else
        {
            chrome.scripting.insertCSS(
                options
            );
            activate.innerText = "Deactivate";
        }
    
        chrome.storage.sync.set({ hideAnswers: !hideAnswers });
    })

    
});