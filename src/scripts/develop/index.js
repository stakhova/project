
const marquee  = () =>{
    $('.marquee').marquee({
        allowCss3Support: true,
        css3easing: 'linear',
        easing: 'linear',
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        duration: 10000,
        pauseOnCycle: false,
        pauseOnHover: false,
        startVisible: false,
        // gap: 142,
    });
}


const upload = () => {
    $('#upload-file').change(function() {
        let filepath = this.value;
        let m = filepath.match(/([^\/\\]+)$/);
        let filename = m[1];
        $('#filename').html(filename);
    });
}

const changeImage = () =>{
    $("#img1").fadeIn(0);
    $(window).scroll(function() {
        let item1 = $("#block1");
        let item2 = $("#block2");
        let item3 = $("#block3");
        let item4 = $("#block4");
        let diff = 200;
        let offsetItem1 = item1.offset().top - diff;
        let offsetItem2 = item2.offset().top - diff;
        let offsetItem3 = item3.offset().top - diff;
        let offsetItem4 = item4.offset().top - diff;

        let pos = $(document).scrollTop();
        console.log('off'+ offsetItem1)
        console.log('pos'+ pos)

        if (pos > offsetItem1 ) {
            hideAll("img1");
            $("#img1").fadeIn(0);
        }
        if (pos > offsetItem2 ) {
            hideAll("img2");
            $("#img2").fadeIn(0);
        }
        if (pos >offsetItem3 ) {
            hideAll("img3");
            $("#img3").fadeIn(0);
        }
        if (pos > offsetItem4) {
            hideAll("img4");
            $("#img4").fadeIn(0);
        }

    });

    function hideAll(exceptMe) {
        $(".mobile__img").each(function(i) {
            if ($(this).attr("id") == exceptMe) return;
            $(this).fadeOut(0);
        });
    }
}

const accordion  = () =>{
    function handleOpenCloseAcc(e){
        e.preventDefault();
        let acc = $(this);
        if (acc.next().hasClass('show')) {
            acc.next().removeClass('show');
            acc.next().slideUp(400);
        }
        acc.parent().parent().find('li .culture__item-inner').removeClass('show');
        acc.parent().parent().find('li .culture__item-inner').slideUp(400);
        acc.next().toggleClass('show');
        acc.next().slideToggle(0);
    }
    $(document).on('click', '.culture__item-toggle', handleOpenCloseAcc)
}
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

const sliderHighlights = () =>{
    if (window.innerWidth <= 666) {
        $(".highlights__list").addClass('highlights__slider');
    }
    $(".highlights__slider").slick({
        dots: true,
        arrows : false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
}


const validateForm = (modal,form) => {
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
            modal.fancybox();
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
    sliderHighlights();
    marquee();
    changeImage()
});

$(window).load(function(){
    let formSubs = $('.subs__form'),
        modalSubs = $('.subs__modal'),
        formFooter = $('.footer__form'),
        modalFooter = $('.footer__modal'),
        formJob =  $('.job__form'),
        modalJob = $('.job__modal'),
        formContact =  $('.contact__form'),
        modalContact = $('.contact__modal');

    validateForm(modalSubs,formSubs)
    validateForm(modalFooter,formFooter)
    validateForm(modalJob,formJob)
    validateForm(modalContact,formContact)
    $('.header__burger').on('click', openMenu)
    $('.opportunity__video-play').on('click', playVideo)
    $('.video').on('click', pauseVideo)
    accordion();
    upload();
});

$(window).resize(function(){

});













