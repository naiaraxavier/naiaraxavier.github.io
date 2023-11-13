$(document).ready(() => {
    $("#menu").click(() => {
        $(".navbar").toggleClass("nav-toggle");
    });

    $(window).on('scroll load', () => {
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) { //60px === 100vh or 100%
            document.querySelector('#scroll-top').classList.add('active')
        } else {
            document.querySelector('#scroll-top').classList.remove('active')
        }

        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });
});


document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === "visible") {
        document.title = "Portfolio | Naiara Martins";
        $("#favicon").attr("href", "img/naiara.jpeg");
    } else {
        document.title = "Volte para cá!";
        $("#favicon").attr("href", "img/please.png")
    }
});



let typed = new Typed(".write-text", {
    strings: ["Desenvolvedora Front-End",
        "Desenvolvedora Back-End",
        "Desenvolvedora Full Stack"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 20,
})
