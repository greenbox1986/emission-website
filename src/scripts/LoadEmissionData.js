var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
	region: "us-east-1"
});

console.log("Writing entries to Emission table.");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var EmissionData =
	JSON.parse(fs.readFileSync('../components/data/Mining_emission_compilation.json', 'utf8'));

EmissionData.forEach(function (emission) {
	var params = {
		TableName: "Emission",
		Item: {
			"Unique_ID": emission.Unique_ID,
			"FACTORID": emission.FACTORID,
			"SCC": emission.SCC,
			"SCCID": emission.SCCID,
			"LEVEL1": emission.LEVEL1,
			"LEVEL2": emission.LEVEL2,
			"LEVEL3": emission.LEVEL3,
			"LEVEL4": emission.LEVEL4,
			"NEI_POLLUTANT_CODE": emission.NEI_POLLUTANT_CODE,
			"CAS": emission.CAS,
			"POLLUTANT": emission.POLLUTANT,
			"POLLUTANTID": emission.POLLUTANTID,
			"CONTROLCODE": emission.CONTROLCODE,
			"CONTROLID": emission.CONTROLID,
			"CONTROL": emission.CONTROL,
			"Primary": emission.Primary,
			"VALUE": emission.VALUE,
			"UNIT": emission.UNIT,
			"MEASURE": emission.MEASURE,
			"MATERIAL": emission.MATERIAL,
			"ACTION": emission.ACTION,
			"FORMULA": emission.FORMULA,
			"AP42SECTION": emission.AP42SECTION,
			"NOTES": emission.NOTES,
			"REF_DESC": emission.REF_DESC,
			"QUALITY": emission.QUALITY,
			"NUMSOURCES": emission.NUMSOURCES,
			"Created": emission.Created,
			"REVOKED": emission.REVOKED,
			"Dupcount": emission.Dupcount,
			"Dupreason": emission.Dupreason,
			"Source": emission.Source
		}
	};

	dynamodb.put(params, function (err, data) {
		if (err)
			console.error("Unable to load data into table for Emission",
				emission.LEVEL1, ". Error: ", JSON.stringify(err, "NA", 2))
		else
			console.log("Added", emission.LEVEL1, "to table.")
	});
});