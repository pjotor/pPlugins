// Patterns replacer

;(function ($) {

	$.prep = function(s,d){ 
		for(var i in d) { 
			s = s.replace('{'+i+'}', function($1){ 
				return d[$1.substr(1,$1.length-2)]; 
			}); 
		} 
		return s; 
	}

})(jQuery);