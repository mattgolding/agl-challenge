var serverMoch = (function () {
    var runRequest = function (url, callback) {
        $.ajax({
            url: url,
            dataType: 'jsonp', // jsonp for cross site domain
            success: onAjaxSuccess
        });

        function onAjaxSuccess(data) {
            // call the method we want to continue with on success
            callback(data);
        }
    };

    return {
        runRequest: runRequest
    };
})();