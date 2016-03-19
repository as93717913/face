var fs=require('fs');
var fpp = require('face-plus-plus');
var request = require('request');
 fpp.setApiKey('4db1d43aaa76f0e6a246aee85b9e0751');
 
 fpp.setApiSecret('ZKlaxXkEgy9AW3_RPPOT3lFm79y788G0');
var train_person_name='tommy';
//var train_person_name='norman';
for(var i=46;i<47;i++){	
console.log(i);
    var parameters = {
        //attribute: 'gender,age',
	
        img : {
            value: fs.readFileSync('./'+train_person_name+'/f ('+i+').jpg')
            , meta: {filename:'f ('+i+').jpg'}
        }
    };
    fpp.post('detection/detect', parameters, function(err, res) {
		if(!err&&res.face[0]){
        //console.log(res);
		//console.log(i);
		//console.log(res.face[0].face_id);
	request.get('https://apius.faceplusplus.com/v2/person/add_face?api_secret=ZKlaxXkEgy9AW3_RPPOT3lFm79y788G0&api_key=4db1d43aaa76f0e6a246aee85b9e0751&person_name='+train_person_name+'&face_id='+res.face[0].face_id)
	.on('response', function(response) {
    //console.log(response) // 200 
   // console.log(response.headers['content-type']) // 'image/png' 
  });
		}else{
			console.log('找不到臉');
		}
    });
}