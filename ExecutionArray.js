(function execute(inputs, outputs) {
    //Declare Variables
    var httpStatus;
    var heimdalResponseBodyToJson = {};

    try {
        // 1) Create a variable to RESTMessage object
        var heimdalrequest = new sn_ws.RESTMessageV2('Heimdal REST API', 'Revoke_Token_PRE');
        //heimdalrequest.setStringParameterNoEscape('UserPrincipalName', inputs['upn']);

        var userPrincipalNamesArray = inputs['upn']
            .split('\n')
            .map(function(user){ return user.trim(); })
            .filter(function(user){ return user.length > 0; });

        var requestBody = {
            "UserPrincipalName": userPrincipalNamesArray
        };

        heimdalRequest.setRequestBody(JSON.stringify(requestBody));

        // 2) Execute the call
        var heimdalResponse = heimdalrequest.execute();
        httpStatus = heimdalResponse.getStatusCode();

        // 3) Parse reponse
        var heimdalResponseBody = heimdalResponse.getBody();
        if (heimdalResponseBody) {
            heimdalResponseBodyToJson = JSON.parse(heimdalResponseBody);
        }
        
        // 4) Validate HTTP status
        if (httpStatus == 202) {
            outputs['status'] = 'OK';
        } else {
            outputs['status'] = 'ERROR';
            outputs['error_message'] = "Heimdal API returned an unexpected status: " + httpStatus;
        }

    } catch (ex) {
        outputs['status'] = 'ERROR';
        outputs['error_message'] = ex.message;
    }

    // 5) Assign final outputs
    outputs['heimdalresponsestatus']     = httpStatus;
    outputs['heimdalresponsebodytojson'] = heimdalResponseBodyToJson;
    outputs['heimdalstatusurl']          = heimdalResponse.getHeader("Location");
    outputs['heimdallogsurl']            = heimdalResponse.getHeader("LogsLocation");

})(inputs, outputs);
