//IMPORTANT CLASS, PLEASE CHANGE CAREFULLY !!!!!!!!!!
//par_accountType : Is for creating cookie name
var cookieTime = 1;

export function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}


export function clearCookies(name) {
    createCookie(name, "", -1);
}


export function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}



/*function Cookie(par_accountType) {


    var accountType = par_accountType;
    var cookieTime = 1; //day


    function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

        if (arr = document.cookie.match(reg))

            return unescape(arr[2]);
        else
            return null;
    }

    function clearCookies(name) {
        createCookie(name, "", -1);
    }

    function createCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        } else var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
    }


    function setCookie(par_url) {
        createCookie("acy_" + accountType, par_url, cookieTime);
        return this;
    }

    function removeQueryStringByKey(a_queryString) {

        var items = a_queryString.split('&');
        console.log(a_queryString, items)
        var newString = '';
        for (var index = 0; index < items.length; index++) {
            if (items[index].search("showStep") === -1 && items[index].search("token") === -1 && items[index].search("country") === -1 && items[index].search("host") === -1 && items[index].search("isBusiness") === -1) {
                newString += items[index];
                console.log('1')
            }
        }
        return newString;
    }


    function isEmpty(val) {
        return (val === undefined || val == null || val.length <= 0 || val === '');
    }


    function createAgentCookie() {
        var queryResult = removeQueryStringByKey(window.location.search);
        console.log('test',queryResult)
        var query_empty = isEmpty(queryResult);
        if (!query_empty) {
            var link = window.location.protocol + '//' + window.location.hostname + queryResult;
            setCookie(link);
        }

    }

    return{

        createAgentCookie,
        getCookie,
        clearCookies

    }
}

export default Cookie
*/
