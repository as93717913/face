var watson = require('watson-developer-cloud');
var fs = require('fs');

var visual_recognition = watson.visual_recognition({
  username: '083b191c-c42d-45c6-824e-69c80dd6eb9d',
  password: 'CybVjosVT4du',
  version: 'v2-beta',
  version_date: '2015-12-02'
});

var params = {
	images_file: fs.createReadStream('./test/test2.jpg'),
	classifier_ids: fs.readFileSync('./classifiers.json')
};

visual_recognition.classify(params, 
	function(err, response) {
   	 if (err)
      		console.log(err);
    	 else
   		console.log(JSON.stringify(response, null, 2));
});