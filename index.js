var robot = require("./robot");
var parser = require("./parser");
var fs = require("fs");

robot.login(function(err,result,body){
	console.log(result.statusCode);
	parser.getDatesAndNames(body,function(err,result){
		if(err) throw err;
		console.log(result);
	});
});