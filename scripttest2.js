(function executeAction(inputs, outputs) {
    // Los Action Inputs están disponibles:
    gs.info('Email: ' + inputs.contactEmail);
    gs.info('Phone: ' + inputs.contactPhone);

    outputs.processMessage = 'Datos: ' + inputs.contactEmail + ', ' + inputs.contactPhone;
})(inputs, outputs);
