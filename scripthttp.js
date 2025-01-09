(function execute(inputs, outputs) {
    // Crear un objeto RESTMessageV2 para el REST Message creado
    var request = new sn_ws.RESTMessageV2('Register External Request', 'POST Register Request');

    // Declarar variables
    var httpstatus;
    var responsebody;
    var success;

    try {
        // Pasar valores a las variables del REST Message
        request.setStringParameterNoEscape('demoname', inputs.demoname);
        request.setStringParameterNoEscape('demotype', inputs.demotype);
        request.setStringParameterNoEscape('contactemail', inputs.contactemail);
        request.setStringParameterNoEscape('contactphone', inputs.contactphone);

        // Ejecutar el request
        var response = request.execute();
        httpstatus = response.getStatusCode(); // Captura el código de respuesta HTTP
        responsebody = response.getBody();    // Captura el cuerpo de la respuesta
        success = (httpstatus === 201);       // Indica éxito si el código HTTP es 201
    } catch (error) {
        // Manejar errores
        httpstatus = 500;                     // Código de error predeterminado
        responsebody = error.message || 'Unknown error occurred'; // Detalle del error
        success = false;                      // Indica fallo en el request
    }

    outputs.httpstatus = httpstatus;
    outputs.responsebody = responsebody;
    outputs.success = success;
})(inputs, outputs);
