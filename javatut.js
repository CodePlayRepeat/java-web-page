$(document).ready(function(){
    $('#dcs,.htry,.jva,.inst,.oopp').hide();
    $("#hm").click(function(){
        $("#welcpage").slideDown();
        $("html").animate({ scrollTop: 0 }, "slow");
        $("#sec1,#sec2,#sec3,#sec4").fadeIn(1000);
        $("#abbt").fadeOut(100);
        $("#btn").show();
        $('#dcs,.htry,.jva,.inst').hide();
    });
    $("#abt").click(function(){
        $("#welcpage").slideUp();
        $("#abbt").fadeIn(1000);
        $("html").animate({ scrollTop: 0 }, "slow");
        $("#sec1,#sec2,#sec3,#sec4,#btn,#dcs,.jva,.htry,.inst,.oopp").hide();
    });
    $('#doc').click(function(){
        $("#welcpage").slideUp();
        $("#abbt").slideUp(500);
        $("html").animate({ scrollTop: 0 }, "slow");
        $("#sec1,#sec2,#sec3,#sec4,#btn,.jva,.htry,.inst,.oopp").hide();
        $('#dcs').slideDown(1000);
    });
    $('.intro').click(function(){
        $("#welcpage").slideUp();
        $("#abbt").slideUp();
        $("html").animate({ scrollTop: 0 }, "slow");
        $("#sec1,#sec2,#sec3,#sec4,#btn,#dcs,.htry,.inst,.oopp").hide();
        $('.jva').slideDown();
    });
    $("#bttn").click(function(){
        $("#welcpage").slideUp();
        $("#abbt").slideUp();
        $("html").animate({ scrollTop: 0 }, "slow");
        $("#sec1,#sec2,#sec3,#sec4,#btn,#dcs,.jva,.inst,.oopp").hide();
        $('#dcs').slideDown();
    });
    $('.httry').click(function(){
        $("#welcpage").slideUp();
        $("#abbt").slideUp();
        $("html").animate({ scrollTop: 0 }, "slow");
        $("#sec1,#sec2,#sec3,#sec4,#btn,#dcs,.jva,.inst,.oopp").hide();
        $('.htry').slideDown();
    });
    $('.instt').click(function(){
        $("#welcpage").slideUp();
        $("#abbt").slideUp();
        $("html").animate({ scrollTop: 0 }, "slow");
        $("#sec1,#sec2,#sec3,#sec4,#btn,#dcs,.jva,.htry,.oopp").hide();
        $('.inst').slideDown();
    });
    $(".ooppp").click(function(){
        $("html").animate({ scrollTop: 0 }, "slow");
        $('.oopp').slideDown();
        $("#welcpage,#sec1,#sec2,#sec3,#sec4,#btn,#dcs,.jva,.htry,.inst").hide();
    });
});