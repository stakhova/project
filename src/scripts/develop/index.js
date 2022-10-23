
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
        modalFooter= $('.footer__modal');
    // accordion();
    validateForm(modalSubs,formSubs)
    validateForm(modalFooter,formFooter)
    $('.header__burger').on('click', openMenu)

});

$(window).resize(function(){

});