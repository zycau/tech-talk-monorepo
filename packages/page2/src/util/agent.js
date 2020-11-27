//IMPORTANT CLASS, PLEASE CHANGE CAREFULLY !!!!!!!!!!
//par_accountType : Is for creating cookie name


import {createCookie, getCookie} from "./cookie";

export function Agent(par_accountType) {

    var accountType = par_accountType;
    var cookieTime = 1; //day
    var leadSource = "";
    var leadSourceClassification;

    // For hash router in some landing pages
    var queryText = location.search ? location.search : window.location.href.includes('?') ? window.location.href.split('?')[1] : ''

    this.getAgent = function () {
        ///////////////////////////////////////////////////////////////////
        //IMPORTANT LOGIC, CHANGE CAREFULLY !!!!!!!!!! UNIT TEST PROVIDED
        //////////////////////////////////////////////////////////////////
        var link = getURLbyCookiesOrURL();
        var par = filterOtherParameter(link);

        if (hasParamters(link) && !isEmpty(par)) {
            setCookie(link);
            leadSourceClassification = par.split(',')[1];
            leadSource = par.split(',')[0];
        }
        
        var cookieLink = getCookie("acy_" + accountType);
        console.log('leadSource',leadSource,
            leadSourceClassification)
        return {
            cookieLink,
            leadSource,
            leadSourceClassification
        }
    };



    this.createAgentCookie=function() {
        var queryResult = removeQueryStringByKey(queryText);
        console.log('test',queryResult)
        var query_empty = isEmpty(queryResult);
        if (!query_empty) {
            var link = window.location.protocol + '//' + window.location.hostname + queryResult;
            setCookie(link);
        }
    };

    ////////////////////////////////////////////////
    // --- IMPORTANT LOGIC:MUST RUN/WRITE UNIT CASE IF CHANGE --- //
    ////////////////////////////////////////////////
    function setCookie(par_url) {
        createCookie("acy_" + accountType, par_url, cookieTime);
        return this;
    }

    function removeQueryStringByKey(a_queryString) {
        var items = a_queryString.split('&');
        var newString = '';
        for (var index = 0; index < items.length; index++) {
            if (items[index].search("showStep") === -1 && items[index].search("token") === -1 && items[index].search("country") === -1 && items[index].search("host") === -1 && items[index].search("isBusiness") === -1 ) {
                newString += items[index];
            }
        }
        return newString;
    }


    function isEmpty(val) {

        return (val === undefined || val == null || val.length <= 0 || val === '');
    }

    function getURLbyCookiesOrURL() {
        ///////////////////////////////////////////////////////////////////////////////
        // Description :  Check can get URL from  cookies or url !IMPORTANT LOGIC
        //////////////////////////////////////////////////////////////////////////////
        var cookieResult = getCookie("acy_" + accountType);

        var queryResult = removeQueryStringByKey(queryText);

        var query_empty = isEmpty(queryResult);

        var cookies_empty = isEmpty(cookieResult);

        var both_empty = isEmpty(cookieResult) && isEmpty(queryResult);

        if (both_empty) {
            return undefined;
        } else if (!query_empty) {
            return window.location.href;
        } else if (!cookies_empty) {
            return cookieResult;
        } else {
            window.alert("Agent Exception error, Please contact our customer service team");
        }
    }

    function hasParamters(par_url) {
        return par_url === undefined ? false : true;
    }

    function filterOtherParameter(a_querystring) {
        if (a_querystring === undefined || a_querystring === false || a_querystring === '' || a_querystring === null) {
            return undefined;
        }

        //Split the url and the query string
        if (a_querystring.indexOf("?") !== -1) {
            a_querystring = a_querystring.split("?")[1];
        } else {
            return undefined;
        }

        //Split all the & , if not showStep or token , it = to agent
        var tmp = [];
        var items = a_querystring.split("&");

        for (var index = 0; index < items.length; index++) {
            if (items[index].search("showStep") === -1 && items[index].search("token") === -1 && items[index].search("country") === -1 && items[index].search("host") === -1 && items[index].search("isBusiness") === -1 && items[index].search("title") === -1 && items[index].search("refer") === -1) {
                tmp = items[index].split("=");
                if (tmp.length !== 1) {
                    return decodeURIComponent(tmp);
                }
            }
        }
        return undefined;
    }
}

