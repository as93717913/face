var fs=require('fs');
var fpp = require('face-plus-plus');
var request = require('request');
 fpp.setApiKey('4db1d43aaa76f0e6a246aee85b9e0751');
 
 fpp.setApiSecret('ZKlaxXkEgy9AW3_RPPOT3lFm79y788G0');
fpp.group_name("IBM");
//console.log(i);
    var parameters = {
       // attribute: 'gender,age',
		group_name:"IBM",
        img : {
            value: fs.readFileSync('./test/test2.jpg')
            , meta: {filename:'test2.jpg'}
        }
    };
    fpp.post('recognition/identify', parameters, function(err, res) {
		if(!err&&res.face[0]){
        console.log(JSON.stringify(res.face[0].candidate));
		//console.log(i);
		//console.log(res.face[0].face_id);
	
		}else{
			console.log('找不到臉');
		}
    });
