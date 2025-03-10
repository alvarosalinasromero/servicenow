var grIncident = new GlideRecord("incident"); // Crear objeto GlideRecord
grIncident.addQuery('active', '1');  // Buscar solo incidentes activos (1 = true)
grIncident.query();  // Ejecutar consulta

if (grIncident.next()) {  // Si hay resultados...
    gs.info(grIncident.number);  // Imprimir el número del incidente
    gs.info(grIncident.short_description); // Imprimir la descripción corta
}
