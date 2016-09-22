/**
 * Created by zc on 2016/9/14.
 */

$(function () {
    function resize() {
        (function () {
            var windowWidth = $(window).width();
            var isSmallImg = windowWidth < 768;

            $("#main_id .carousel-inner .item").each(function (i, ele) {
                var $ele = $(ele);
                var imgSrc = $ele.data(isSmallImg ? "image-sm" : "image-lg");
                $ele.css("backgroundImage", 'url("' + imgSrc + '")');
                if (isSmallImg) {
                    $ele.html("<img src='" + imgSrc + "'>")
                } else {
                    $ele.empty()
                }
            })
        })();

        /*tab横向滚动条*/
        (function () {
            var ulContainer = $(".tab-wrapper .nav-tabs");
            var windowWidth = $(window).width();
            var width = 30;
            ulContainer.children().each(function (index, ele) {
                width += $(ele).width()
            });
            if (width > windowWidth) {
                $(".tab-wrapper .nav-tabs")
                    .css("width", width)
                    .parent().css("overflow-x", "scroll")
            }
        })();
    }
    $(window).on("resize", resize).trigger("resize");

/*新闻标题变换*/
    (function () {
        var key=null;
        $(".newsTittleBox").children().click(function () {
            $(".newsBox").html($(this).data("news-tittlec"));
            key=$(this).data("news-tittlec")
        });
        $(".newsTittleBox").children().mouseenter(function () {
            $(".newsBox").html($(this).data("news-tittlem"))
        });
        $(".newsTittleBox").mouseleave(function () {
            console.log(key);
            if(key){
                $(".newsBox").html(key)
            }else {
                $(".newsBox").html("全部新闻")
                console.log(11)
            }
        });
    })();

    /*微信*/
    $(".weixinBox").hover(
        function () {
        $(".weixin").show()
    }, function () {
            $(".weixin").hide()
    });

    /*返回顶部*/
    $(window).scroll(function () {
       if($(window).scrollTop()>200){
           $(".rocket").fadeIn()
       }else {
           $(".rocket").fadeOut()
       }
    });
    $(".rocket").click(function () {
    $("body,html").animate({
        scrollTop:0
    },500)
})
});