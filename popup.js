
chrome.storage.local.get("timeString", function(result){
	document.getElementById("time-text").innerHTML = result.timeString;
});
