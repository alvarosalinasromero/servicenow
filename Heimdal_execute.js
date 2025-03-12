(function execute(inputs, outputs) {
    //Declare Variables
    var httpStatus;
    var heimdalResponseBodyToJson = {};
    var heimdalStatusURL;
    var heimdalLogsURL;

    try {
        // 1) Create a variable rh to RESTMessage object
        var heimdalrequest = new sn_ws.RESTMessageV2('Heimdal REST API', 'Revoke_Token_PRE');
        
        // 2) JSON body
        var body = {
            "UserPrincipalName": inputs.upn
        };
        
        // 3) Assign the body
        heimdalrequest.setRequestBody(JSON.stringify(body));

        // 4) Execute the call
        var heimdalResponse = heimdalrequest.execute();
        var heimdalResponseBody = heimdalResponse.getBody();
        httpStatus = heimdalResponse.getStatusCode();
        
        // 5) Parse if not empty
        if (heimdalResponseBody) {
            heimdalResponseBodyToJson = JSON.parse(heimdalResponseBody);
        }

        // 6) Read headers (optional)
        heimdalStatusURL = heimdalResponse.getHeader("Location");
        heimdalLogsURL   = heimdalResponse.getHeader("LogsLocation");

        // 7) Validate HTTP status
        if (httpStatus == 202) {
            outputs['status'] = 'OK';
            outputs['error_message'] = "Test API message";
        } else {
            outputs['status'] = 'ERROR';
            outputs['error_message'] = "ERROR in Test API: " + httpStatus;
        }

    } catch (ex) {
        outputs['status'] = 'ERROR';
        outputs['error_message'] = ex.message;
    }

    // Assign final outputs
    outputs['heimdalresponsestatus']     = httpStatus;
    outputs['heimdalresponsebodytojson'] = heimdalResponseBodyToJson;
    outputs['heimdalstatusurl']          = heimdalStatusURL;
    outputs['heimdallogsurl']            = heimdalLogsURL;

})(inputs, outputs);
