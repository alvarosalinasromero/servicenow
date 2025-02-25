function onSubmit() {
    var upn = g_form.getValue('user_principal_name');
    if (!upn.includes('#EXT#')) {
        alert('Solo se permiten usuarios guest (externos).');
        return false; // Evita que el formulario se envíe
    }
    return true;
}
