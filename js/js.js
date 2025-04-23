$(document).ready(function () {
    const screenAvailWidth = window.screen.availWidth;
    const screenAvailHeight = window.screen.availHeight;
    const SuserAgent = navigator.userAgent.toLowerCase();
    if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(SuserAgent) || (screenAvailWidth < screenAvailHeight)){
        window.location.href = "https://abc.com/";
    } else {
        window.location.href = "https://123.com/";
    }
})



