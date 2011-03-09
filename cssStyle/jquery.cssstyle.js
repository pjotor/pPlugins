// Style sheet getter
// Returns style as object usage:
// var classNameColor = $.cssStyle(".className").color;

;(function ($) {

    $.cssStyle = function (selector) {
        var sels = selector.match(/(^|\#|\.|\s)[\w|-]+/g),
            ret = {},
            style, sel, i;
        $.each(
        document.styleSheets, function () {
            var rules = this.cssRules || this.rules;
            $.each(rules, function (n, v) {
                for (i in sels) {
                    sel = new RegExp("(?:^|\\s)(" + sels[i].replace(/^\s+/, "") + ")(?=,|$)");
                    if (v.selectorText && sel.test(v.selectorText)) {
                        $.extend(ret, $.map.str(v.style.cssText));
                    }
                }
            });
        });
        return ret;
    }
})(jQuery);