


function callpls(e){

// Bind to the submit event of our form
    
    console.log('in callus submit');

    // Abort any pending request
    // setup some local variables
    var $form = $("#callus");

    // Let's select and cache all the fields
    var inputs = $form.find("#Employee_ID, #Employee_Name, #Employee_Email, #Adults, #Kids");
    //console.log($inputs);
    console.log(inputs);
    console.log("here here here");
    // Serialize the data in the form
    var params = $form.serialize();
     console.log(params);
    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.

    // Fire off the request to /form.php
    var url="https://script.google.com/macros/s/AKfycbzhx9SV1YuE9I5xoF0gpLJvzOsB0NCX4EdaMnENTjAnUVzJGkzl/exec";
    







   


    $.ajax({

        url:"https://script.google.com/macros/s/AKfycbzhx9SV1YuE9I5xoF0gpLJvzOsB0NCX4EdaMnENTjAnUVzJGkzl/exec" ,
        type: 'GET',
        dataType:'jsonp',
        crossDomain: true,
        data: params,
        
        success:function (response, textStatus,jqXHR){
        // Log a message to the console
        $('#callus')[0].reset();

        console.log('in callus success');
        console.log(response);
        console.log(textStatus);
        console.log(jqXHR);
        console.log("Hooray, it worked!");
    },
    error:function(jqXHR, textStatus, errorThrown){
       console.log( "The following error occurred: "+
            textStatus, errorThrown);
    }



    });

    // Callback handler that will be called on success
   
    // Callback handler that will be called on failure
    

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    

    // Prevent default posting of form
    event.preventDefault();


};
