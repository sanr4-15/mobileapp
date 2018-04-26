var APP_ID = 'DA6C674F-F844-5278-FFCD-E5095DDDE000';
var API_KEY = '0AB99E65-B7F1-3285-FF2F-3EC6292B9F00';

Backendless.initApp(APP_ID, API_KEY);

$(document).on("pagecreate", "#booking", function () {
    $('#submit').on("click", function () {
        console.log("signing up user");
    var today = new Date();

    var date = today.getDate();
    var month = (today.getMonth()+1);
    var year = today.getFullYear();

    var todayStr = month+"/"+date+"/"+year;
    $('#date').trigger('datebox', {'method':'set', 'value':todayStr});
});