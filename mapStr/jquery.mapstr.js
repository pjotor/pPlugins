// a little string mapper (string to object)
;(function ($) {
    $.map.str = function (s, objDev, keyDev) {
        objDev = objDev || ";", keyDev = keyDev || ":";
        if (s.indexOf(keyDev) === -1) return s;
        var d = s.split(objDev);
        var r = {};
        var key, val;
        for(par in d) {
            val = d[par].split(keyDev);
            key = $.trim(val.splice(0, 1).join());
            val = $.trim(val.join(keyDev));
            if (val.length > 1) {
                r[$.camelCase(key)] = val;
            }            
        }
        return r;
    }
})(jQuery);
