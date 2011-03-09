// Fuzzy time teller

(function($){ 
	$.fuzz = function (d){ d = isNaN(Date.parse(d))? (new Date): new Date(Date.parse(d)); 
	var t = [, "it's", "right after", "about", "o'clock", "quarter", "to", "past", "half", "sharp", "a"],
	h=["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"],
	m=[0,d.getMinutes(),d.getHours()],s=[]; m[0]=m[1]%7.5; s[0]=t[1];
	s.push( (m[0]==0)? t[0]:(m[0]==parseInt(m[0]))?t[2]:t[3]);
	s.push( (m[1]>53)? [h[(m[2]+1)%12],  t[4]           ] :
	        (m[1]>37)? [t[10],t[5],t[6], h[(m[2]+1)%12] ] :
	        (m[1]>23)? [t[8],            h[m[2]%12]     ] :
	        (m[1]>7 )? [t[10],t[5],t[7], h[m[2]%12]     ] :
	        (m[1]>0 )? [h[m[2]%12],      t[4]           ] :
			   [h[m[2]%12],t[4], t[9]           ]);
	return s.join(" ").replace(/,/g," "); } 
})(jQuery)