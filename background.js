var time = 0;
var timeString ="00:00:00";
var running = false;
console.log('background script running');
console.log('current time' + timeString);
start();
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
	console.log("button clicked");
	if (running === false){
		console.log ("Timer Started");
	}else {
		console.log ("Timer Puased");
	}
	
	startPause();
	console.log(timeString);
}

function test(){
	console.log ("Testing");
}

//implement stop watch 

function startPause(){
	if(running === false){
		running = true;
		increment();
	}else{
		running = false;
	}
}

function start(){
	running = true;
}

function pause(){
	running = false;
}

function reset(){
	running = false;
	time =0;
}

function increment(){
	if (running === true){
		setTimeout(function(){
			time++;
			var hours = Math.floor(time/10/60/60);
			var mins = Math.floor (time/10/60);
			var secs = Math.floor(time/10);
			var tenths =time %10;
			timeString = hours + ":" + mins + ":" + secs;
			increment();
		}, 100)
	}

}