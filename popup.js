$(function(){
    chrome.storage.sync.get(['total'], function(reminder){
        $('#total').text(reminder.total);
    });

    $('#addReminder').click(function() {
        var amount = $('#amount').val();
        chrome.runtime.sendMessage({"message": "amount", "value": amount});
        
        chrome.storage.sync.get(['total'], function(reminder) {
            var newTotal = 1;
            newTotal += parseInt(reminder.total);
            var time = $('#time').val();

            var alarmInfo = {
                delayInMinutes: parseInt(time)
            };

            chrome.alarms.create(alarmInfo);

            chrome.storage.sync.set({'total': newTotal}, function(){
                
            });

            $('#total').text(newTotal);
        });
    });
});