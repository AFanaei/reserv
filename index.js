var robot = require("./robot");
var fs = require("fs");

robot.login(function(err,result,body){
	//fs.writeFile("web.txt", body );
	console.log(result.statusCode);
});