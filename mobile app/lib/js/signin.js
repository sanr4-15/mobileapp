var APP_ID = 'DA6C674F-F844-5278-FFCD-E5095DDDE000';
var API_KEY = '0AB99E65-B7F1-3285-FF2F-3EC6292B9F00';
//initializing the server using the app id and API key
Backendless.initApp(APP_ID, API_KEY);

$(document).on("pagecreate", "#signin", function () { 
    $('#signinbtn').on("click", function () {
//if successful, the console shows the message when the submit button is clicked
    console.log("signing in user");
        
        var userName = $('#signinuser').val();
        var password = $('#signinpassword').val();
        
        
        //logs the user in the credentials are true
        Backendless.UserService.login( userName, password, true).then(userLoggedIn).catch(gotError);
    });
});



//If user has logged in the console will show this message
function userLoggedIn(user) {
    console.log("user has logged in");
    
}

function gotError(err) // see more on error handling
{
    console.log("error message - " + err.message);
    console.log("error code - " + err.statusCode);
}

