
parser={
	getDatesAndNames:function(body,caly){
		var table = /<table id="datagrid">(.|\n)*?<\/table>/;
		var rows = /<tr>(?:\w|\n|\s)*?<td>((?:.|\n)*?)<\/td>(?:\w|\n|\s)*?<td colspan="2" >((?:.|\n)*?)<\/td>(?:\w|\n|\s)*?<\/tr>/g;
		var result = body.match(table);
		var mainObj=[];
		result[0].replace(rows,function(all,date,checkbox){
			parser.parseRow(all,date,checkbox,function(result){
				mainObj.push(result);
			});
			return;
		});
		caly.call(null,mainObj);
	},
	parseRow:function(all,date,checkbox,caly){
		var regexName = /name="_\[((?:\d)*)\]"/;
		var regexDate = /<br\/>(?:\n|\s)*?((?:\d)+ (?:.)+? (?:\d){4})/;
		var obj={};
		date.replace(regexDate,function(all,res){
			obj.date=res;
			obj.checkName && caly.call(null,obj);
		});
		var j=0;
		checkbox.replace(regexName,function(all,name){
			obj.checkName=name;
			obj.date && caly.call(null,obj);
		});
	}
}
module.exports=parser;