chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        console.log("This is a first install!");
		 chrome.tabs.create({
			url: 'welcome/page.html'
		});
  
    }else if(details.reason == "update"){
        var thisVersion = chrome.runtime.getManifest().version;
        console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
    }
});

//Redirect from Valve's version of gamehighlightplayer.js to our stub file. We need this to prevent errors. 
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		if( details.url.indexOf("gamehighlightplayer.js")>-1){
			return {redirectUrl: "chrome-extension://"+chrome.runtime.id+"/js/gamehighlightplayer_stub.js" };
		}

    },
    {urls: ["*://*.steamstatic.com/*"]},
    ["blocking"]);


//Valve block's YouTube video's via content-security-policy. This is a gentle fix	
chrome.webRequest.onHeadersReceived.addListener(
	function(details) {
		for (var i = 0; i < details.responseHeaders.length; i++) {
			if ('content-security-policy' === details.responseHeaders[i].name.toLowerCase()) {
				// If someone can make regex for this stuff, fill free to contact me. I'll fix this part
				var temp_csp = details.responseHeaders[i].value;

				var ss_pos = temp_csp.indexOf("; object-src")
				
				if (ss_pos!=-1)
				{
					temp_csp = temp_csp.slice(0, ss_pos) + " *.youtube.com s.ytimg.com" + temp_csp.slice(ss_pos);
					
					var fs_pos = temp_csp.indexOf("frame-src 'self'")
					var fs_len = "frame-src 'self'".length
					
					if (fs_pos!=-1)
					{
						temp_csp = temp_csp.slice(0, fs_pos+fs_len) + " *.youtube.com" + temp_csp.slice(fs_pos+fs_len);
						
						details.responseHeaders[i].value = temp_csp
					}
				}	
			}
		}
		return {
			responseHeaders: details.responseHeaders
		};
	}, 
	{
		urls: ["*://*.steampowered.com/*"],
		types: ["main_frame", "sub_frame"]
	}, 
	["blocking", "responseHeaders"]);
	
	

		
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	// Messages from content scripts
  });
