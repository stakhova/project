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


$('.video').parent().click(function () {
    if($(this).children(".video").get(0).paused) {
        $(this).children(".video").get(0).play();
        $(this).children(".opportunity__video-pause ").fadeOut();
    }else{
        $(this).children(".opportunity__video-pause ").get(0).pause();
        $(this).children(".playpause").fadeIn();
    }
});


const sliderInsights = () =>{
    $('.insights__list').slick({
        dots:true,
        arrows : true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="insights-prev"></button>',
        nextArrow: '<button class="insights-next"></button>'
    });
    if ($(window).width() < 666) {
        $(".insights__list").slick('slickSetOption', 'slidesToShow', 1);
    }
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
    $(window).width() > 666 ? $('body').toggleClass('overflow') :( $('main').toggleClass('none'),$('footer').toggleClass('none'))
};



$(document).ready(function(){
    sliderInsights();
});

$(window).load(function(){
    let formSubs = $('.subs__form'),
        modalSubs = $('.subs__modal'),
        formFooter = $('.footer__form'),
        modalFooter= $('.footer__modal'),
        playButton = $("#play_button");
    // accordion();
    validateForm(modalSubs,formSubs)
    validateForm(modalFooter,formFooter)
    $('.header__burger').on('click', openMenu)

});

$(window).resize(function(){

});