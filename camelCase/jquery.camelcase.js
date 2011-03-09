;(function ($) {
    // CamelCase object keys (ripped from jQuery since it seems to come and go in core)
    if ( !$.isFunction($.camelCase) ) {
        $.camelCase = function (string) {
            return string.replace(/-([a-z])/ig, function (all, letter) {
                return letter.toUpperCase();
            });
        }
    }
})(jQuery);