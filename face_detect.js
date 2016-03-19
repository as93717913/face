var fs=require('fs');
var fpp = require('face-plus-plus');
var request = require('request');
 fpp.setApiKey('4db1d43aaa76f0e6a246aee85b9e0751');
 
 fpp.setApiSecret('ZKlaxXkEgy9AW3_RPPOT3lFm79y788G0');
var counter=0;
//console.log(i);
for(var i=1;i<79;i++){
    var parameters = {
        attribute: 'gender,age',
	
        img : {
            value: fs.readFileSync('./cutten_face/norman/f ('+i+').jpg')
            , meta: {filename:'test.jpg'}
        }
    };
    fpp.post('detection/detect', parameters, function(err, res) {
		if(!err&&res.face[0]){
        console.log(res);
		//console.log(i);
		//console.log(res.face[0].face_id);
	
		}
		else{
			console.log(counter);
			counter++;
		}
    });
}