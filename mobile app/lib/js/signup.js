var APP_ID = 'DA6C674F-F844-5278-FFCD-E5095DDDE000';
var API_KEY = '0AB99E65-B7F1-3285-FF2F-3EC6292B9F00';
//initializing the server using the app id and API key
Backendless.initApp(APP_ID, API_KEY);


$(document).on("pagecreate", "#signup", function () {
    $('#submit').on("click", function () {
//if successful, the console shows the message when the submit button is clicked
        console.log("signing up user");
        //creating a new user getting the values from the username, email and password input fields
        var user = new Backendless.User();
        user.username = $('#username').val();
        user.email = $('#email').val();
        user.password = $('#password').val();
        
        
        Backendless.UserService.register(user).then(userRegistered).catch(gotError);
    });
});


//console shows the message if user successfully registers
function userRegistered(user) {
    console.log("user has been registered");
}

function gotError(err) // see more on error handling
{
    console.log("error message - " + err.message);
    console.log("error code - " + err.statusCode);
}

