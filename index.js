var robot = require("./robot");
var fs = require("fs");

robot.login(function(err,result,body){
	//fs.writeFile("web.txt", body );
	console.log(result.statusCode);
	var regex = /<table id="datagrid">(.|\n)*?<\/table>/;
	var str ='<table id="datagrid">salam</table>';
	var result = body.match(regex);
	console.log(result[0]);
});