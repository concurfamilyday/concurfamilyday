



    $(document).submit(function(){

// Bind to the submit event of our form
    
   // console.log('in callus submit');

    // Abort any pending request
    // setup some local variables
    
    // Let's select and cache all the fields
    //console.log($inputs);
    var $form = $(this);
    //var inputs = $form.find("#Employee_ID, #Employee_Name, #Employee_Email, #Adults, #Kids");
    //var value = $('#Employee_ID').val();
    //alert(value);
    //console.log(validateEmail("hiharmeet7@gmail.com"));
   //console.log(validateName("ha7rmeet singh"));
   //console.log(validateInumber("I32710x"))
    var inputs={Employee_ID:$('#Employee_ID').val(),Employee_Name:$('#Employee_Name').val(),Employee_Email:$('#Employee_Email').val(),Adults:$('#Adults').val(),Kids:$('#Kids').val()}
    //console.log(inputs);
    inputs.Employee_ID=inputs.Employee_ID.toUpperCase();
    //console.log("here here here");
    // Serialize the data in the form
    var params = jQuery.param(inputs);
     //console.log(params);


 //var inputs = $form.find("#Employee_ID, #Employee_Name, #Employee_Email, #Adults, #Kids");

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.

    // Fire off the request to /form.php
    

      // var eml= validateEmail(inputs["#Employee_Email"]);
        var nam=validateName($('#Employee_Name').val());
        var ino=validateInumber($('#Employee_ID').val());





        
    function validateInumber(ino)
    {
        var re = /^[A-Za-z]+$/;
        inx=ino.substring(1);
        var i=parseInt(inx);
        var flag=true;
        var int_length = inx.length;
        console.log(int_length);
        console.log(isNaN(inx));
        //console.log(!isNan(inx));
        if(int_length != 6 || isNaN(inx))
            flag=false;
        iny=ino.substring(0,1);
        console.log("iny="+iny);

        console.log("inx="+inx);

        console.log("in0="+ino[0]);
        if((ino[0]=='i'||ino[0]=='I')&&flag&&ino.length==7)
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


//console.log(eml);
//console.log(ino);


   if(nam&&ino)
{

    $.ajax({

        url:"https://script.google.com/macros/s/AKfycbx6ne3qfcApJdcLyj5ezDCTWWWLuaxhoA9ZLOfdy2em7IiEgHlN/exec" ,
        type: 'GET',
        dataType:'jsonp',        
        crossDomain: true,
        data: params,
        
        success:function (response,textStatus,jqXHR){
        // Log a message to the console
        $('#callus')[0].reset();

        //console.log('in callus success');
        alert(response.result+"!!!"+response.reason);
        //console.log("Hooray, it worked!");
    },
    error:function(jqXHR, textStatus, errorThrown){
       console.log( "The following error occurred: "+
            textStatus, errorThrown);
    }



    });}
    else
    {   var opt="";
        if(!nam)
            opt=opt+",Employee name";
        if(!ino)
            opt=opt+",Employee Inumber";

alert('Invalid '+opt);
window.href("/index.html");
    }

    // Callback handler that will be called on success
   
    // Callback handler that will be called on failure
    

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    

    // Prevent default posting of form
    event.preventDefault();



});

