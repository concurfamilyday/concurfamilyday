function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    function validateInumber(ino)
    {
        var re = /^[A-Za-z]+$/;
        inx=ino.substring(1);
        iny=ino.substring(0,1);
        console.log("iny="+iny);

        console.log("inx="+inx);

        console.log("in0="+ino[0]);
        if((ino[0]=='i'||ino[0]=='I')&&!(re.test(inx))&&ino.length==6)
            return true;
        else 
            return false;


    }
function validateName(name)
{
    var matches = name.match(/\d+/g);

    if (name=="" || matches!=null)
        return false;
    else 
        return true;

}


function callpls(e){

// Bind to the submit event of our form
    
    console.log('in callus submit');

    // Abort any pending request
    // setup some local variables
    var $form = $("#callus");

    // Let's select and cache all the fields
    var inputs = $form.find("#Employee_ID, #Employee_Name, #Employee_Email, #Adults, #Kids");
    console.log("here here here");
    
    var eml= validateEmail(inputs["#Employee_Email"]);
        var nam=validateName(inputs["#Employee_Name"]);
        var ino=validateInumber(inputs["#Employee_ID"]);
        console.log(eml);
    console.log(nam);
    console.log(ino);
 if(eml&&nam&&ino)
{

    
    
    
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
}
    else
    {   var opt="";
        if(!eml)
        opt=opt+"Email ID";
        if(!nam)
            opt=opt+",Employee name";
        if(!ino)
            opt=opt+",Employee Inumber";

alert('Invalid '+opt);
window.href("https://github.com/concurfamilyday/concurfamilyday");
    }


    // Callback handler that will be called on success
   
    // Callback handler that will be called on failure
    

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    

    // Prevent default posting of form
    event.preventDefault();


};
