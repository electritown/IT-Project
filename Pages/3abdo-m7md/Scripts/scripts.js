$(document).ready(function () {
    $(".toggler").click(function () {
        $(".content").toggleClass("open-content");
        $(".sidebar").toggleClass("open-sidebar");
        $(".wrap").toggleClass("open-wrap");
        $(".btn1").toggleClass("btn1h1");
        $(".btn2").toggleClass("btn2h2");
        $(".btn3").toggleClass("btn3h3");
        $(".button").toggleClass("open-button");
        $(".toggler").toggleClass("open-toggler");
        
        //$(".sidebar").click(function () {
          //  $(".sidebar").removeClass("active");
            //$(this).addClass('active');
        //});
       function navigate(){ 
           window.frames['Iframe'].document.location.href = document.getElementByID('myPage.html').value; 
       }

    });

    $('.content').localScroll();

});