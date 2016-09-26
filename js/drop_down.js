
//$('#county').hide();
$(document).ready(function(){
    $("#Adults").change(function(){
        $('#Kids').empty();
        $('#Kids').show();
        var no_of_adults = $("#Adults").val();
        for(i=0;i<=(4-no_of_adults);i++)
            $('#Kids').append("<option>"+i+"</option>");
    });
});
