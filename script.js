$(function () {
    var H = 0;
    $("div").each(function (i) {
        var h = $(".field2").eq(i).height();
        if (h > H) H = h;
    });
    $(".field2").height(H);
});