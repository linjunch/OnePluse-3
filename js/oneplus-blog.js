$(function () {
    $(".sub-nav>ul>li>a").hover(function () {
        $(this).children("span").stop().slideDown(200);
    },function () {
        $(this).children("span").stop().slideUp(200);
    });
    $(".info-page>a").hover(function () {
        $(this).toggleClass("active")
        // alert(111)
    })
});