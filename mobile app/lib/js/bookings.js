var feedURL = "https://api.backendless.com/DA6C674F-F844-5278-FFCD-E5095DDDE000/2938ACD0-B8CF-9AD3-FF34-621EC7C6D000/data/equipment";

$(document).on('pagecreate', '#list', function(event) {

    // Use an HTML GET request to obtain data from an API
	var xmlhttp=new XMLHttpRequest();
    
    xmlhttp.open("GET", feedURL, true);
	xmlhttp.send();
    
    xmlhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            // parse the resulting JSON into Javascript Data Object 
            // you can use a live parser to inspect the contents of the JSON
            // http://json.parser.online.fr/ 
            var lists= JSON.parse(xmlhttp.responseText);
            
            var sum =0;
            var objectid = lists[0].objectId;//.objectID;
            //var fug = objectid.updated;
//            for(var i = 0; i < weather.consolidated_weather.length; i++)
//            {
//                sum += weather.consolidated_weather[i].min_temp;
//            }
//            
//            sum = sum/weather.consolidated_weather.length;
//

            //Define Ractive binding
            var ractive = new Ractive(
            {
                el: 'container', <!-- where -->
                template: '#myTemplate', <!-- how -->
                data: { lista : lists[0], avg_weather: objectid } <!-- what - specify the list of weather reports using dot notation-->
            });
        }
    };	
});










































//var APP_ID = 'DA6C674F-F844-5278-FFCD-E5095DDDE000';
//var API_KEY = '0AB99E65-B7F1-3285-FF2F-3EC6292B9F00';
//
//Backendless.initApp(APP_ID, API_KEY);
//
//Backendless.Data.of( "equipment" ).find()
//  .then( function( result ) {
//     // every loaded object from the "equipment" table is now an individual untyped
//     // JS object in the "result" array
//   })
//  .catch( function( error ) {
//    // an error has occurred, the error code can be retrieved with fault.statusCode
//   });