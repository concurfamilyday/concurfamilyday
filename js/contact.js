  

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    function postContactToGoogle(){
        var id = $j('#Employee_ID').val();
        var name = $j('#Employee_Name').val();
        var kid = $j('#Kids').val();

        var email = $j('#Employee_Email').val();
        var adults = $j('#Adults').val();
        if ((name !== "")&&(kid !== "")&&(adults !== "")&&(id !== "") && (email !== "") && (validateEmail(email))) {
            $j.ajax({
                url: "https://docs.google.com/spreadsheet/Concur_Response",
                data: {"entry.1" : id, "entry.2" : name, "entry.3" : email, "entry.4": kids, "entry.5" : adults},
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function (){
                        $j('#id').val("");
                        $j('#name').val("");
                        
                        $j('#email').val("");
                        $j('#adults').val("");
                        $j('#kids').val("");
                        //Success message
                    },
                    200: function (){
                        $j('#id').val("");
                        $j('#name').val("");
                        
                        $j('#email').val("");
                        $j('#adults').val("");
                        $j('#kids').val("");
                        //Success Message
                    }
                }
            });
        }
        else {
            //Error message
        }
    }