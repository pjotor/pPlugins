// PubSub Hooks
// Hooks Pub to elements. 
// Triggers supplied String or pub attribute or href - in that order

;(function ($) {
    $.fn.pubsub = function (s) {
        s = s || $(this).attr("pub") || $(this).attr("href");

        if (s) {
            $(this).click(function (event) {
                event.preventDefault();
                $.pub(s, [event, this]);
            });
        } else
            return false;
    }
})(jQuery);
