function gallery(elem) {

    let setInvisible = function(elem) {
        elem.css('visibility', 'hidden');
    };
    let setVisible = function(elem) {
        elem.css('visibility', 'visible');
    };

    let items = elem.children();

    // Inserting Buttons
    elem.prepend('<button class="btn left-arrow arrow" style="visibility: hidden;"><i class="fas fa-chevron-left"></i></button>');
    elem.append('<button class="btn right-arrow arrow"><i class="fas fa-chevron-right"></i></button>');

    // Inserting Inner
    items.wrapAll('<div class="inner" />');

    // Inserting Outer
    elem.find('.inner').wrap('<div class="outer"/>');

    let outer = $('.outer');

    $('.left-arrow').click(function() {
        let leftPos = outer.scrollLeft();
        outer.animate({
            scrollLeft: leftPos - 300
        }, 800, function() {
            debugger;
            if ($('.outer').scrollLeft() <= 0) {
                setInvisible($('.left-arrow'));
            }
        });
    });

    $('.right-arrow').click(function() {
        setVisible($('.left-arrow'));
        let leftPos = outer.scrollLeft();
        outer.animate({
            scrollLeft: leftPos + 300
        }, 800);
    });
}

gallery($(".project-row"));
gallery($(".gallery-row"));



let slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = $(".mySlides");
    let dots = $(".demo");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}