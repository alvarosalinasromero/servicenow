var incidentGR = new GlideRecord("incident");
	incidentGR.addQuery('number','INC0008111');
	incidentGR.query();
	if(incidentGR.next()){
		incidentGR.deleteRecord();
	}
