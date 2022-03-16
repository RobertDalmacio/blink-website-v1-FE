$(function() {
    /* ---------------------- Start of Owl Carousel Script ---------------------- */
    $('#carousel1').children().each( function ( index ) {
        $(this).attr('data-position', index);
    });
    $('#carousel2').children().each( function ( index ) {
        $(this).attr('data-position', index);
    });

    const nextIcon = '<i class="fa-solid fa-arrow-right-long" style="font-size:60px; margin: 10px; position: absolute; bottom: 5%; left: 55%; color: #f34279;"></i>'
    const prevIcon = '<i class="fa-solid fa-arrow-left-long" style="font-size:60px; margin: 10px; position: absolute; bottom: 5%; right: 55%; color: #f34279;"></i>'

    $("#carousel1").owlCarousel({
        loop: false,
        center: true,
        margin: 10,
        navText: [prevIcon, nextIcon],
        responsiveClass:true,
        items: 3,
        responsive: {
            450: {
                items: 3,
                nav: false
            },
            1000: {
                items: 3,
                nav: true
            },
            1400: {
                items: 4,
                nav: true
            },
            2500: {
                items: 5,
                nav: true
            }
        }
    });
    $("#carousel2").owlCarousel({
        loop: true,
        center: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsiveClass:true,
        items : 1, 
        responsive : {
        450 : { items : 1  }, 
        750 : { items : 2  }, 
        1000 : { items : 3 },
        1400: { items: 4 },
        2500: { items: 5 }
    }
    });

    $("#carousel2").trigger('refresh.owl.carousel');
    $(function() {
        $("#play").click(function(){
        if ($("#play").children("i").hasClass("fa-circle-pause")) {
            $("#play").children("i").removeClass("fa-circle-pause");
            $("#play").children("i").addClass("fa-circle-play");
            $("#carousel2").trigger('stop.owl.autoplay');
        } else {
            $("#play").children("i").removeClass("fa-circle-play");
            $("#play").children("i").addClass("fa-circle-pause");
            $("#carousel2").trigger('play.owl.autoplay',[5000]);
        }});
    });
    /* ----------------------- End of Owl Carousel Script ----------------------- */

    /* ------------------------------ Modal Script ------------------------------ */
    $('#loginModal').modal(options)

    /* ------------------------------ Tabs Scripts ------------------------------ */
    var firstTabEl = document.querySelector('#myTab li:last-child button')
    var firstTab = new bootstrap.Tab(firstTabEl)
    firstTab.show()

    var secondTabEl = document.querySelector('#myTab2 li:last-child button')
    var secondTab = new bootstrap.Tab(secondTabEl)
    secondTab.show()
})