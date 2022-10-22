
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


const accordion  = () =>{
    $('.culture__item-toggle').click(function(e) {
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
    });
}
const openMenu  = () =>{
    $('.header__burger').toggleClass("header__burger-open");
    $(".header__burger-menu").toggleClass('header__burger-visible')
    $('.header__burger-wrap').toggleClass('header__burger-relative')
    $('body').toggleClass('overflow')
};



$(document).ready(function(){
    sliderInsights();
});

$(window).load(function(){
    let formSubs = $('.subs__form'),
        modalSubs = $('.subs__modal'),
        formFooter = $('.footer__form'),
        modalFooter= $('.footer__modal');
    accordion();
    validateForm(modalSubs,formSubs)
    validateForm(modalFooter,formFooter)
    // $(document).on('click', 'елемент на який клікають', назва функції з логікою),
    $('.header__burger').on('click', openMenu)

});

$(window).resize(function(){

});