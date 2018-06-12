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