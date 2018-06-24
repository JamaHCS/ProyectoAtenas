
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