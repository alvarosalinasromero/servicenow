var incidentGR = new GlideRecord("incident");
	incidentGR.addQuery('number','INC0008111');
	incidentGR.query();
	if(incidentGR.next()){
		incidentGR.short_description = "Incident Updated";
		incidentGR.update();
	}
