var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

var dynamodb = new AWS.DynamoDB();

var params = {
  TableName: "Emission",
  KeySchema: [
    // Partition Key
    { AttributeName: "Unique_ID", KeyType: "HASH" },
    // Sort Keys
    { AttributeName: "LEVEL1", KeyType: "RANGE"}
  ],
  AttributeDefinitions: [
    { AttributeName: "Unique_ID", AttributeType: "N" },
    { AttributeName: "LEVEL1", AttributeType: "S" }
  ], 
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
};

dynamodb.createTable(params, function(err, data) {
  if (err)
    console.error("Unable to create table: ", JSON.stringify(err, null, 2))
  else
    console.log("Created table with description: ", JSON.stringify(data, null, 2))
});