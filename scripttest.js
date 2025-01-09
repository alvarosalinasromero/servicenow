(function executeAction(inputs, outputs) {

    // Aquí tienes acceso a:
    // inputs.stepName, inputs.stepContactEmail, etc.

    // Ejemplo:
    gs.info('=== Procesando información de contacto ===');
    gs.info('Name: ' + inputs.stepName);
    gs.info('Contact Email: ' + inputs.stepContactEmail);
    gs.info('Contact Phone: ' + inputs.stepContactPhone);
    gs.info('Contact User: ' + inputs.stepContactUser);
    gs.info('Location: ' + inputs.stepLocation);

    // Podemos hacer algún "procesamiento" básico:
    var message = 'Usuario ' + inputs.stepName + ' con email ' + inputs.stepContactEmail + ' procesado.';

    // Asignamos algún output:
    outputs.processmessage = message;

})(inputs, outputs);
