/* =================================
------------------------------------
	LibChurch - Event Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/



'use strict';

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Counter
	--------------------*/
	$(".counter").countdown("2018/07/01", function(event) {
		$(this).html(event.strftime("<div class='counter-item'><h4>%D</h4>Dias</div>" + "<div class='counter-item'><h4>%H</h4>Horas</div>" + "<div class='counter-item'><h4>%M</h4>Mins.</div>" + "<div class='counter-item'><h4>%S</h4>segs.</div>"));
	});


})(jQuery);


$('#btn').click(function () {
    $('#modal').modal();
});


$('#btn1').click(function () {
    $('#modal1').modal();
});


$('#btn2').click(function () {
    $('#modal2').modal();
});


$('#btn3').click(function () {
    $('#modal3').modal();
});


$('#btn4').click(function () {
    $('#modal4').modal();
});

$('#btn5').click(function () {
    $('#modal5').modal();
});

$('#btn6').click(function () {
    $('#modal6').modal();
});

$('#btn7').click(function () {
    $('#modal7').modal();
});

$('#btn8').click(function () {
    $('#modal8').modal();
});

$('#btn9').click(function () {
    $('#modal9').modal();
});

$('#btn10').click(function () {
    $('#modal10').modal();
});

$('#btn11').click(function () {
    $('#modal11').modal();
});

$('#btn12').click(function () {
    $('#modal12').modal();
});

$('#btn13').click(function () {
    $('#modal13').modal();
});
$('#btn14').click(function () {
    $('#modal14').modal();
});
$('#btn15').click(function () {
    $('#modal15').modal();
});
$('#btn16').click(function () {
    $('#modal16').modal();
});
$('#btn17').click(function () {
    $('#modal17').modal();
});
$('#btn18').click(function () {
    $('#modal18').modal();
});
$('#btn19').click(function () {
    $('#modal19').modal();
});
$('#btn20').click(function () {
    $('#modal20').modal();
});
$('#btn21').click(function () {
    $('#modal21').modal();
});
$('#btn22').click(function () {
    $('#modal22').modal();
});
$('#btn23').click(function () {
    $('#modal23').modal();
});
$('#btn24').click(function () {
    $('#modal24').modal();
});
$('#btn25').click(function () {
    $('#modal25').modal();
});
$('#btn26').click(function () {
    $('#modal26').modal();
});
$('#btn27').click(function () {
    $('#modal27').modal();
});
$('#btn28').click(function () {
    $('#modal28').modal();
});
$('#btn29').click(function () {
    $('#modal29').modal();
});
$('#btn30').click(function () {
    $('#modal30').modal();
});
$('#btn31').click(function () {
    $('#modal31').modal();
});
$('#btn32').click(function () {
    $('#modal32').modal();
});
$('#btn33').click(function () {
    $('#modal33').modal();
});



// Bind to scroll
$(window).scroll(function () {

    //Display or hide scroll to top button 
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }

    if ($(this).scrollTop() > 130) {
        $('.navbar').addClass('navbar-fixed-top animated fadeInDown');
    } else {
        $('.navbar').removeClass('navbar-fixed-top animated fadeInDown');
    }

    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight + 10;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
            return this;
    });

    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href=#" + id + "]").parent().addClass("active");
    }
});

/*
Function for scroliing to top
************************************/
$('.scrollup').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});


$(window).load(function () {
    function filterPath(string) {
        return string.replace(/^\//, '').replace(/(index|default).[a-zA-Z]{3,4}$/, '').replace(/\/$/, '');
    }
    $('a[href*=#]').each(function () {
        if (filterPath(location.pathname) == filterPath(this.pathname) && location.hostname == this.hostname && this.hash.replace(/#/, '')) {
            var $targetId = $(this.hash),
                $targetAnchor = $('[name=' + this.hash.slice(1) + ']');
            var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;

            if ($target) {

                $(this).click(function () {

                    //Hack collapse top navigation after clicking
                    topMenu.parent().attr('style', 'height:0px').removeClass('in'); //Close navigation
                    $('.navbar .btn-navbar').addClass('collapsed');

                    var targetOffset = $target.offset().top - 63;
                    $('html, body').animate({
                        scrollTop: targetOffset
                    }, 800);
                    return false;
                });
            }
        }
    });
});