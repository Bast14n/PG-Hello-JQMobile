function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

// function deviceInfo() {

// 	info =  'Device Model   : '    + device.model + '<br>' + 
// 			'Device Name    : '     + device.name + '<br>' + 
// 			'Device Cordova : '  + device.cordova + '<br>' + 
// 			'Device Platform: ' + device.platform + '<br>' + 
// 			'Device UUID    : '     + device.uuid + '<br>' + 
// 			'Device Version : '  + device.version + '<br>';

// 	document.getElementById("deviceDetails").innerHTML = info;	
// }

function myInfo(){
	const info = "Jestem Sebixon i lubie placki";

	document.getElementById("myInterest").textContent = info;
}