$(function() {
    $('#resetTotal').click(function(){
        chrome.alarms.clearAll();
        chrome.storage.sync.set({'total': 0}, function(){
            var notifOptions = {
                type: 'basic',
                iconUrl: 'icon48.png',
                title: 'Reminders Removed',
                message: 'All your reminders have been removed!'
            };
            chrome.notifications.create('limitNotif', notifOptions);
        });
    });

});