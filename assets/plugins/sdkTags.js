exports.defineTags = function(dictionary) {

    function addViewer(doclet) {
        doclet.components.push("widget");
        doclet.components.push("fixed");
        doclet.components.push("worker");
        doclet.components.push("page");
    }

    dictionary.defineTag('viewer', {
        mustHaveValue : false,
        canHaveType: false,
        canHaveName : false,
        onTagged: function(doclet) {
            doclet.components = doclet.components || [];
            addViewer(doclet);
        }
    });

    dictionary.defineTag('product', {
        mustHaveValue : true,
        canHaveType: false,
        canHaveName : false,
        onTagged: function(doclet, tag) {
            doclet.product = tag.value
        }
    });

    dictionary.defineTag('widgets', {
        mustHaveValue : false,
        canHaveType: false,
        canHaveName : false,
        onTagged: function(doclet) {
            doclet.components = doclet.components || [];
            doclet.components.push("widget");
            doclet.components.push("fixed");
            doclet.components.push("page");
            doclet.components.push("modal");
            doclet.components.push("popup");
        }
    });

    dictionary.defineTag('modal', {
        mustHaveValue : false,
        canHaveType: false,
        canHaveName : false,
        onTagged: function(doclet) {
            doclet.components = doclet.components || [];
            doclet.components.push("modal");
        }
    });

    dictionary.defineTag('popup', {
        mustHaveValue : false,
        canHaveType: false,
        canHaveName : false,
        onTagged: function(doclet) {
            doclet.components = doclet.components || [];
            doclet.components.push("popup");
        }
    });

    dictionary.defineTag('all', {
        mustHaveValue : false,
        canHaveType: false,
        canHaveName : false,
        onTagged: function(doclet) {
            doclet.components = doclet.components || [];
            addViewer(doclet);
            doclet.components.push("dashboard");
            doclet.components.push("settings");
        }
    });
};