Backendless.initApp( DA6C674F-F844-5278-FFCD-E5095DDDE000, 0AB99E65-B7F1-3285-FF2F-3EC6292B9F00 )


$(document).on("pagecreate","#signup",function(){
  $('#btn-submit').on("click", function(){
    console.log("signing up user");
      
      var username = $('#username').val();
      
      alert(username);
      
  });             
});       

          
