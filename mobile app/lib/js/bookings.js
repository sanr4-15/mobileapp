var APP_ID = 'DA6C674F-F844-5278-FFCD-E5095DDDE000';
var API_KEY = '0AB99E65-B7F1-3285-FF2F-3EC6292B9F00';

Backendless.initApp(APP_ID, API_KEY);

Backendless.Data.of( "equipment" ).find()
  .then( function( result ) {
     // every loaded object from the "equipment" table is now an individual untyped
     // JS object in the "result" array
   })
  .catch( function( error ) {
    // an error has occurred, the error code can be retrieved with fault.statusCode
   });