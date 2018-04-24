var APP_ID = 'DA6C674F-F844-5278-FFCD-E5095DDDE000';
var API_KEY = '0AB99E65-B7F1-3285-FF2F-3EC6292B9F00';

Backendless.initApp(APP_ID, API_KEY);





$(document).on("pagecreate", "#signin", function () {
    $('#signinbtn').on("click", function () {
        console.log("signing in user");
        
        var user = new Backendless.login();
        var pass = new Backendless.login();
        user.username = $('#signinuser').val();
        pass.password = $('#signinpassword').val();
        
        
        Backendless.UserService.login( user, pass, true).then(userLoggedIn).catch(gotError);
    });
});




function userLoggedIn(user) {
    console.log("user has logged in");
}

function gotError(err) // see more on error handling
{
    console.log("error message - " + err.message);
    console.log("error code - " + err.statusCode);
}


//$(document).on("pagecreate", "#signin", function () {
//    $('#signinbtn').on("click", function () {
//        console.log("signing in user");
//        
//        var user = new Backendless.login();
//        user.username = $('#signinuser').val();
//        user.password = $('#signinpassword').val();
//        
//        Backendless.UserService.login( user, true).then(userLoggedIn).catch(gotError);
//    });
//});
//
//
//
//
//function userLoggedIn(user) {
//    console.log("user has logged in");
//}
//
//function gotError(err) // see more on error handling
//{
//    console.log("error message - " + err.message);
//    console.log("error code - " + err.statusCode);
//}
