var incidentGR = new GlideRecord("incident");
	incidentGR.newRecord();
	incidentGR.short_description = "Test from Developer instance";
	incidentGR.urgency = 3;
	incidentGR.impact = 2;
	incidentGR.assignment_group = "a8d4afad83ee5e101b70b9f6feaad3c4";
	var incSysid = incidentGR.insert();
	gs.info(incSysid);
	gs.info(incidentGR.number);
