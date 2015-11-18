exports.handlers = {
    newDoclet: function(e) {
        if(e.doclet && e.doclet.product) {
            if(e.doclet.product !== 'code') {
                e.doclet.ignore = true;
            }
        }
    }
};