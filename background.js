var blacklistUrl = ['facebook.com', 'youtube.com', 'instagram.com', 'twitter.com'];
var testBlacklist = 'google.com';

chrome.browserAction.onClicked.addListener(buttonClicked);
chrome.tabs.onActivated.addListener(checkAndStartTimer);
chrome.tabs.onUpdated.addListener(checkAndStartTimer);


function checkAndStartTimer(activeTab){
	var currentUrl;
	// tabid = activeTab.tabId;
	// var activeTabId = activeTab.tabId;
	// console.log(activeTab.tabId);
	chrome.tabs.query({currentWindow:true, active: true}, function(tabs){
		currentUrl = tabs[0].url;
		if(checkTab(currentUrl)){
			start();
			console.log("Blacklisted site detected , timer started");
		}else{
			pause();
			console.log("timer paused");
			console.log(timeString);
		}
	});
}

function checkTab(url){
	var found = false;
	for (var i = 0; i<blacklistUrl.length; i++){
		if(url.includes(blacklistUrl[i])){return true}
			else{found = false}
	}
	return false;
}


function buttonClicked(tab){

	if (running === false){
		console.log ("Timer Started");
	}else {
		console.log ("Timer Paused");
	}

	startPause();
	console.log(timeString);
}

function test(){
	console.log ("Testing");
}

var time = 0;
var timeString ="00:00:00";
var running = false;

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
	if (running === false){
			running = true;
		increment();
	}else{
		running = true;
	}

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

