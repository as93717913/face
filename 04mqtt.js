var mqtt = require('mqtt');

    
    
   var clientId = ['d', "{組織ID}", "{裝置類型}", "{裝置ID}"].join(':');
    
    
    iot_client = mqtt.connect("mqtt://{組織ID}.messaging.internetofthings.ibmcloud.com:1883",
                          {
                              "clientId" : clientId,
                              "keepalive" : 30,
                              "username" : "use-token-auth",
							  "password" : "{鑑別記號}"
                          }); 
						  
						  
   iot_client.on('connect', function() {
        
      console.log('Rapiro client connected to IBM IoT Cloud.');
      iot_client.publish('iot-2/evt/status/fmt/json', '{"d":{"status": "connected" }}');
	  iot_client.publish('iot-2/evt/light/fmt/string', '20'); 
	  iot_client.publish('iot-2/evt/speed/fmt/string', '10');  //iot-2/evt/color/fmt/json
   
    }
    );
	
	
	 iot_client.subscribe('iot-2/cmd/+/fmt/+', function(err, granted){

        console.log('subscribed command, granted: '+ JSON.stringify(granted));
        
    });

	
	iot_client.on("message", function(topic,payload){
	console.log('received topic:'+topic+', payload:'+payload);});