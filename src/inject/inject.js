// chrome.extension.sendMessage({}, function(response) {
// 	var readyStateCheckInterval = setInterval(function() {
// 	if (document.readyState === "complete") {
// 		clearInterval(readyStateCheckInterval);

// 		// ----------------------------------------------------------
// 		// This part of the script triggers when page is done loading
// 		console.log("Hello. This message was sent from scripts/inject.js");
// 		// ----------------------------------------------------------

// 	}
// 	}, 10);
// });
WIKI_URL_REGEX = /^(http|https):\/\/[a-z]+.wikipedia.org\/wiki\/[a-zA-Z0-9_()#%]+$/i
CLASS_MATCHER = /easy-wiki-popover/i

$(document).ready(function() {
	$("a").on('mouseenter', function() {
		if (this.href.match(WIKI_URL_REGEX)) {
			if (!($(this).hasClass("easy-wiki-popover"))) {
				$(this).addClass("easy-wiki-popover");
				$(this).popover({placement: 'bottom'}).popover("show");
			}

		}
	});

	$("a").on('mouseleave', function() {
		if (this.href.match(WIKI_URL_REGEX)) {
			if ($(this).hasClass("easy-wiki-popover")) {
				$(this).popover("hide");
			}

		}
	});

});
