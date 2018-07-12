import history from '../history'
import { Redirect } from 'react-router'

function getCookie(cookieName){
    var decodedcookie = decodeURIComponent(document.cookie);
    var tokenindex = decodedcookie.indexOf(cookieName+"=");
    var aftertokenindex = decodedcookie.slice(tokenindex);
    if(aftertokenindex.indexOf(';')){
        return aftertokenindex.slice(aftertokenindex.indexOf('=') + 1, aftertokenindex.indexOf(';'))
    }else{
        return aftertokenindex.slice(aftertokenindex.indexOf('=') + 1);
    }}



(function checkCookie() {
    var cookie = getCookie("ACKL_token");
    if (cookie != "") {
        history.push('/')
    } else {
         history.push('/signin')


    }
})();