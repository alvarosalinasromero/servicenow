(function execute(inputs, outputs) {
    // Declaración de variables de salida
    var httpstatus = 0;
    var responsebody = "";
    var success = false;

    try {
        // Validar si el UPN contiene "#EXT#"
        if (!inputs.UserPrincipalName.includes('#EXT#')) {
            throw new Error('El usuario proporcionado no es un usuario guest. Solo se permiten usuarios externos.');
        }

        // Crear una instancia del RESTMessageV2
        var request = new sn_ws.RESTMessageV2('RevocarTokenUsuario', 'RevokeUserSession');

        // Reemplazar el parámetro dinámico {user-id} con el UPN proporcionado
        request.setStringParameter('user-id', inputs.UserPrincipalName);

        // Ejecutar la solicitud REST
        var response = request.execute();

        // Obtener detalles de la respuesta
        httpstatus = response.getStatusCode(); // Código de estado HTTP
        responsebody = response.getBody();    // Cuerpo de la respuesta

        // Evaluar éxito basado en el código HTTP
        if (httpstatus === 200) {
            success = true;
        }
    } catch (error) {
        // Manejar errores
        httpstatus = 400; // Código de error genérico para validación fallida
        responsebody = error.message || 'Unknown error occurred';
        success = false;
    }

    // Asignar los resultados a los outputs
    outputs.httpstatus = httpstatus;
    outputs.responsebody = responsebody;
    outputs.success = success;
})(inputs, outputs);
