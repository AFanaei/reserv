var request = require ('request');
var config = require ('./config/config');
var mode = "dev";
var username = "88106147";
var password = "1234";

robot={
	login: function(caly){
		var loginOption ={
			url: config[mode].address.base+config[mode].address.login,
			form:{
				"signin[username]":username,
				"signin[password]":password,
			},
		};
		request.post(loginOption,function(err,res,body){
			if(err) throw err;
			if(res.statusCode!=302){
				var error = "wrong user or password!";
				caly.call(null,error);
			}
			//console.log(res.headers);
			var option2 ={
				url: config[mode].address.base+config[mode].address.home,
				headers:{
					'cookie':res.headers["set-cookie"][1],
				},
			};
			request.get(option2,function(err,res,body){
				//console.log(res.statusCode);
				//console.log(body);
				caly.call(null,null,res,body)
			});
		});
	},
	changeDelivery: function(delivaryPlace,cookie,caly){
		var option2 ={
			url: config[mode].address.base+config[mode].address.home+"?delivery_id="+config[mode].delivery[deliveryPlace],
			headers:{
				'cookie':cookie,
			},
		};
		request.get(option2,function(err,res,body){
			if(err) throw err;
			if(res.statusCode!=200){
				var error = "wrong!";
				caly.call(null,error);
			}
			caly.call(null,null,res,body);
		});
	},
};
module.exports=robot;