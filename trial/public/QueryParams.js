function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    console.log("query",query)
    var params = query.split('&');
    console.log(params)
    for (var i = 0; i < params.length; i++) {
        var pair = params[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1].replace(/\+/g,' '));
        }
    }

    return undefined;
}