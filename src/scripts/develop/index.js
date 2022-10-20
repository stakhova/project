
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

// const addStyleHeader = ( classWrap, classHeader) =>{
//     if ($('.global-wrapper ').hasClass(classWrap)) {
//         $('header').addClass(classHeader);
//     }
// }

const addStyle = () =>{
    if ($('.global-wrapper ').hasClass('cx')) {
        $('header').addClass('cx__header');
    }
}

const validateForm = (modal,form) => {
    modal.fancybox();
    form.validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                digits : true,
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


const accordion  = () =>{
    $('.culture__item-toggle').click(function(e) {
        e.preventDefault();
        let $this = $(this);

        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp(400);
        } else {
            $this.parent().parent().find('li .culture__item-inner').removeClass('show');
            $this.parent().parent().find('li .culture__item-inner').slideUp(400);
            $this.next().toggleClass('show');
            $this.next().slideToggle(0);
        }
    });
}
const openMenu  = () =>{
    $(".header__burger").click(function() {
        if ($("#header__burger-content").hasClass("header__burger-hidden")) {
            $("#header__burger-content").attr("class", "header__burger-visible  header__burger-menu");
            $('body').css('overflow','hidden')
            $('.header__logo').css('display','none');
            $('.header__menu').css('display','none');
            $('.header__block').css('justify-content','flex-end');

            $('.header__burger-wrap').addClass('header__burger-relative')
        } else {
            $("#header__burger-content").attr("class", "header__burger-hidden ");
            $('body').css('overflow','visible')
            $('.header__logo').css('display','block');
            $('.header__menu').css('display','flex');
            $('.header__block').css('justify-content','space-between');
            $('.header__burger-wrap').removeClass('header__burger-relative')
        }
        $(this).toggleClass("header__burger-open");
    });
};




$(document).ready(function(){
    sliderInsights();
});

$(window).load(function(){
    let formSubs = $('.subs__form'),
        modalSubs = $('.subs__modal'),
        formFooter = $('.footer__form'),
        modalFooter= $('.footer__modal');
    //     cxWrap = $('.cx'),
    //     cxHeader = $('.cx__header'),
    //     strategyWrap = $('.strategy'),
    //     strategyHeader = $('.strategy__header');
    // addStyleHeader(cxWrap, cxHeader);
    // addStyleHeader(strategyWrap, strategyHeader);

    addStyle();
    accordion();
    openMenu();
    validateForm(modalSubs,formSubs)
    validateForm(modalFooter,formFooter)

});

$(window).resize(function(){

});