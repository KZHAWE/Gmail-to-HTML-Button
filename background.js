chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [1]
    });
  
    chrome.declarativeNetRequest.onRequest.addRules([
      {
        id: 1,
        priority: 100,
        action: {
          type: "redirect",
          redirect: {
            regexSubstitution: "ui=html$0"
          }
        },
        condition: {
          regexFilter: "https://mail.google.com/.*",
          resourceTypes: ["main_frame"]
        }
      }
    ]);
  });
  