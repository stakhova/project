
const playVideo = () => {
    $('.video').get(0).play()
    $(".opportunity__video-play").fadeOut();
}
const pauseVideo = () =>{
    $('.video').get(0).pause()
    $(".opportunity__video-play").fadeIn()
}

const sliderInsights = () => {
    $('.insights__list').slick({
        dots:true,
        arrows : true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: '<button class="insights-prev"></button>',
        nextArrow: '<button class="insights-next"></button>',
        responsive: [
            {
                breakpoint: 666,
                settings: {
                    slidesToShow: 1,
                }
            },
          ]
    });
}

const sliderPeople = () =>{
    $('.career__slider').slick({
        dots:false,
        arrows : false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 666,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
}



const validateForm = (modal,form) => {
    modal.fancybox();
    $.validator.addMethod("goodEmail", function(value, element) {
        return this.optional(element) || /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i.test(value);
    }, "Please enter valid email address");

    $.validator.addMethod("goodName",function(value,element) {
        return this.optional(element) || /^[a-zA-Z0-9._-]{2,30}$/i.test(value);
    },"Please enter a valid name");

    form.validate({
        rules: {
            name: {
                required: true,
                goodName: true,
                minlength: 2
            },
            email: {
                required:true,
                goodEmail: true,
                email: true
            },
            phone: {
                required: true,
                digits : true,
                minlength: 9
            }
        },
        messages: {
            name: {
                required: "Please specify your name",
                minlength: "Name can't be shorter than 2 characters"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter valid email address"
            }
        },
        submitHandler: function () {
            modal.trigger('click');
            form[0].reset();
        }
    });
}

const openMenu  = () =>{
    $('.header__burger').toggleClass("header__burger-open");
    $('.header__burger-wrap').toggleClass('header__burger-show')
    $(window).width() > 666 ?
        $('body').toggleClass('overflow') :
        ( $('main').toggleClass('none'),
          $('footer').toggleClass('none'),
          $('.strategy header').toggleClass('header__white'),
          $('.cx header').toggleClass('header__white'),
          $('.technology header').toggleClass('header__white'))
};


$(document).ready(function(){
    sliderInsights();
    sliderPeople();
});

$(window).load(function(){
    let formSubs = $('.subs__form'),
        modalSubs = $('.subs__modal'),
        formFooter = $('.footer__form'),
        modalFooter= $('.footer__modal');
        // playButton = $("#play_button");
    validateForm(modalSubs,formSubs)
    validateForm(modalFooter,formFooter)
    $('.header__burger').on('click', openMenu)
    $('.opportunity__video-play').on('click', playVideo)
    $('.video').on('click', pauseVideo)

    // playVideo();
    // accordion();
});

$(window).resize(function(){

});




// $(document).ready(function() {
//
//
//     $("#c1").fadeIn(0);
//     console.log()
//
//     $(window).scroll(function() {
//         let offsetArr = [];
//         $(".mobile__item").each(function () {
//             offsetArr.push($(this).offset().top);
//         });
//
//         // let item = $(".mobile__item");
//         // let offsetItem = item.offset();
//
//         let pos = $(document).scrollTop();
//         console.log(offsetArr)
//         console.log('off'+ offsetArr[0])
//         console.log('pos'+ pos)
//         if (pos > offsetItem) {
//             hideAll("c1");
//             $("#c1").fadeIn(400);
//         }
//         if (pos > 1000 && pos < 1500) {
//             hideAll("c2");
//             $("#c2").fadeIn(300);
//         }
//         if (pos > 1500 && pos < 2500) {
//             hideAll("c3");
//             $("#c3").fadeIn(0);
//         }
//
//     });
//
//     function hideAll(exceptMe) {
//         $(".mobile__img").each(function(i) {
//             if ($(this).attr("id") == exceptMe) return;
//             $(this).fadeOut(0);
//         });
//     }
// });


// $('.video').parent().click(function () {
//     if($(this).children(".video").get(0).paused) {
//         $(this).children(".video").get(0).play();
//         $(this).children(".opportunity__video-pause").fadeOut();
//     } else{
//         $(this).children(".opportunity__video-pause").get(0).pause();
//         $(this).children(".playpause").fadeIn();
//     }
// });





// const playVideo = () =>{
//     $('.video').parent().click(function () {
//         if($(this).children(".video").get(0).paused) {
//             $(this).children(".video").get(0).play();
//             $(this).children(".opportunity__video-pause").fadeOut();
//         } else{
//             $(this).children(".opportunity__video-pause").get(0).pause();
//             $(this).children(".playpause").fadeIn();
//         }
//     });
// }

// const accordion  = () =>{
//     $('.culture__item-toggle').click(function(e) {
//         e.preventDefault();
//         let acc = $(this);
//         if (acc.next().hasClass('show')) {
//             acc.next().removeClass('show');
//             acc.next().slideUp(400);
//         }
//         acc.parent().parent().find('li .culture__item-inner').removeClass('show');
//         acc.parent().parent().find('li .culture__item-inner').slideUp(400);
//         acc.next().toggleClass('show');
//         acc.next().slideToggle(0);
//     });
// }
