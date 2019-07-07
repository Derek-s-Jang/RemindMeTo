
chrome.storage.onChanged.addListener(function(changes, storageName){
    chrome.browserAction.setBadgeText({"text": changes.total.newValue.toString()});      
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    var amount;
    if(request.message === "amount") {
      amount = request.value;
    };
    localStorage.setItem("reminder", amount);
});

chrome.alarms.onAlarm.addListener(function(alarm) { 
    var reminder = localStorage.getItem("reminder");
    var notifOptions = {
        type: 'basic',
        iconUrl: 'icon48.png',
        title: 'ReminderMeTo',
        message: reminder
    };
    chrome.notifications.create('limitNotif', notifOptions);
    
    chrome.storage.sync.set({'total': 0}, function(){ 
    });
});
