$(document).ready(function () {
    //偵測手機瀏覽器高度
    // const appHeight = () => {
    //     const doc = document.documentElement;
    //     const docheight = window.innerHeight + 'px';
    //     doc.style.setProperty('--app-height', docheight);
    //     $('#device').html(window.innerHeight);
    // }
    // window.addEventListener('resize', appHeight)
    // appHeight()
    const screenAvailWidth = window.screen.availWidth;
    const screenAvailHeight = window.screen.availHeight;
    const SuserAgent = navigator.userAgent.toLowerCase();
    if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(SuserAgent) || (screenAvailWidth < screenAvailHeight)){
        //window.location.href = "https://abc.com/";
        $('#device').html(`這是手機,寬${screenAvailWidth} / 高${screenAvailHeight}`);

    } else {
        //window.location.href = "https://123.com/";
        $('#device').html(`這是電腦,寬${screenAvailWidth} / 高${screenAvailHeight}`);
    }
    console.log(SuserAgent)
})



