# pPlugins

A few plugins, helpers and tools for jQuery

Plugin List:

 * Style Getter
 * String Mapper
 * Pattern Replacer
 * CamelCase String
 * Hex Encode/Decode
 * LZW Packer/Unpacker
 * Vignetter
 * Fuzzy Time

### Style Getter

Returns an object with style information from the Style element (not computed style).
This will only return Legal style attributes, no data stored or non-supported browser vendor styles.

    // .myCoolColor { color: #BADA55; }
    $.cssStyle(".myCoolColor").color --> "rgb(186, 218, 85)"


### String Mapper

Creates an Object based on parsing the supplied string.
Uses the stings ";" as default KeyVal-pair divider and ":" as key-value divider.

    var myObj = $.map.str("the: string; you:supply will be; parsed: and turned in:to; some-object: like this");
    JSON.stringify(myObj) --> '{"the":"string","you":"supply will be","parsed":"and turned in:to","someObject":"like this"}'

		// Lets say the document location is: http://localhost/?hello=world&and=space%20to
    var myOtherObj = $.map.str(document.location.search.substr(1));
    JSON.stringify(myOtherObj) --> '{"hello":"world","and":"space%20to"}'

Depends on the CamelCase-plugin ( or the native jQuery $.camelCase ).


### CamelCase String

Code ripped from the jQuery core, since it seem to come and go.
		
		$.camelCase("my-odd-key") --> "myOddKey"

### Pattern Replacer

Replaces named containers with values corresponding with matching keys.

    var myString = "my {color} {fruit}";
    var myValues = { color: "red", fruit: "apple" }
    $.prep(myString, myValues) --> "my red apple"

		//as String prototype
		"my {color} {fruit}".prep({ color: "red", fruit: "apple" }) --> "my red apple"


### Hex Encode/Decode

Encodes strings as Hex (and decodes).

		($.hex("my String") === "6d7920537472696e67") && ($.HEX("6d7920537472696e67") === "my String") --> true


### LZW Packer/Unpacker

Packing strings with LZW.
Algorithm from [rosettacode.org](http://rosettacode.org/wiki/LZW_compression)

		("!!!!!!!!!!".lzw() === "!ĀāĂ") && ("!ĀāĂ".LZW() === "!!!!!!!!!!") --> true


### Fuzzy Time

A little verbose time teller.

		// At 14:58
		$.fuzz() --> "it's about three o'clock"
		
		// With string ( see Date.parse() )
		$.fuzz("march 8, 2011 15:50:30") --> "it's right after a quarter to four"
		
		var someDate = new Date(2000, 01, 01, 23, 18, 00);
		$.fuzz(someDate) --> "it's right after a quarter past eleven"
		
		