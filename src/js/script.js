$(document).ready(function () {
    $(".screen__list").owlCarousel({
        margin: 50,
        dotsEach: true,
        loop: true,
        responsive: {
            0: {
                items: 2,
                margin: 10
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }

    });
});

$(document).ready(function () {
    $(".feedback__clients").owlCarousel({
        margin: 50,
        dotsEach: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2,
                margin: 10
            },
            992: {
                items: 3
            }
        }

    });
});

$(document).ready(() => {
    $navBtnList = document.querySelectorAll('.table__nav-btn');

    $('.table__list').eq(1).fadeOut();

    for (let i = 0; i < $navBtnList.length; i++) {
        $navBtnList[i].addEventListener('click', () => {
            for (let j = 0; j < $navBtnList.length; j++) {
                $('.table__list').fadeOut();
            }
            for (let j = 0; j < $navBtnList.length; j++) {
                $navBtnList[j].classList.remove('table__nav-btn_active');
            }

            $('.table__list').eq(i).fadeIn();
            $navBtnList[i].classList.add('table__nav-btn_active');
        });
    }
});

new WOW().init();