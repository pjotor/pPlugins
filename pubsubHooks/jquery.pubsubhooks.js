// PubSub Hooks
// Hooks Pub to elements. 
// Triggers supplied String or pub attribute or href - in that order

;(function($) {
	$.fn.pubsub = function (s) {
		var docPath = document.location.href;
		var docRoot = docPath.substr(0,docPath.lastIndexOf("/")+1);
		
		s = s || $(this).attr("pub") || $(this).attr("a").replace(docRoot,"");
		
		$(this).click(function(event){
			event.preventDefault();
			$.pub( s, [event, this] );
		});
	}
})(jQuery);