function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//function checkCookie() {
//    var username = getCookie("username");
//    if (username != "") {
//        alert("Welcome again " + username);
//    } else {
//        username = prompt("Please enter your name:", "");
//        if (username != "" && username != null) {
//            setCookie("username", username, 365);
//        }
//    }
//}

function getCookie(cookieName){
    var decodedcookie = decodeURIComponent(document.cookie);
    var tokenindex = decodedcookie.indexOf(cookieName+"=");
    var aftertoken = decodedcookie.slice(tokenindex);
    if(aftertoken.indexOf(';')){
        return aftertoken.slice(aftertoken.indexOf('=') + 1, aftertoken.indexOf(';'))
    }else{
        return aftertoken.slice(aftertoken.indexOf('=') + 1);
    }}



function checkCookie() {
    var cookie = getCookie("token");
    if (cookie != "") {
        return cookie;
    } else {
         return "No cookie found";
    }
}