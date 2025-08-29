(function($) {
    $(document).ready(function() {
        ScrollTrigger.defaults({
            toggleActions: "restart pause resume reverse",
        });

        (function() {//pizza
            window.introTimeline = gsap.timeline({paused: true})
            .from('.pizza .tit',{x: '-100%', y: '200%', ease: 'expo.out', rotate: -15, skewX: -30, duration: 1})
            .from('.whole_pizza img', {y: '150%', x: '60%', skewX: 25, rotate: 30, duration: 0.7, ease: 'expo.out',
                onComplete: function(){
                    gsap.to('.whole_pizza img', {y: -15, x: 5, skewX: -3, duration: 10, yoyo: true, repeat: -1, ease: 'linear'})
                }
            },'-=0.5')
            .from('.pizza_toppings',{
                scale: 0, duration: 0.3, ease: 'back(3)', 
                onComplete: function(){
                    tl = gsap.timeline({paused: true})
                    tl.add([
                        gsap.fromTo('.pizza_topp01', {x: 0, y: 0, skewX: 0}, {x: '-15', y: '-30px', skewX: -5, duration: 15, yoyo: true, repeat: -1, ease: 'linear'}),
                        gsap.fromTo('.pizza_topp02', {x: 0, y: 0, skewX: 0}, {x: '15', y: '30px', skewX: -5, duration: 12, yoyo: true, repeat: -1, ease: 'linear'}),
                        gsap.fromTo('.pizza_topp04', {x: 0, y: 0, skewX: 0}, {x: '15', y: '30px', skewX: 2, duration: 10, yoyo: true, repeat: -1, ease: 'linear'}),
                        gsap.fromTo('.pizza_topp03', {x: 0, y: 0, skewX: 0}, {x: '-15', y: '-30px', skewX: -5, duration: 8, yoyo: true, repeat: -1, ease: 'linear'}),
                        gsap.fromTo('.pizza_topp05', {x: 0, y: 0, skewX: 0}, {x: '-15', y: '-30px', skewX: -5, duration: 5, yoyo: true, repeat: -1, ease: 'linear'}),
                        gsap.fromTo('.pizza_topp06', {x: 0, y: 0, skewX: 0}, {x: '15', y: '30px', skewX: 2, duration: 17, yoyo: true, repeat: -1, ease: 'linear'}),
                        gsap.fromTo('.pizza_topp07', {x: 0, y: 0, skewX: 0}, {x: '15', y: 50, skewX: 2, duration: 20, yoyo: true, repeat: -1, ease: 'linear'}),
                    ])
                    tl.play()
                }
            },'-=0.2')
            .from('.deco_txts img',{opacity: 0, x: '-100%', duration: 1, ease: 'expo.out', stagger: 0.5},'-=0.2')

            gsap.timeline({
                scrollTrigger: {
                    trigger: '.pizza_btm',
                    start: 'top 70%',
                },
            })
            .add([
                gsap.from('.pizza_left_deco', {x: '-100%', y: '-30%', ease: 'expo.out', duration: 0.2}),
                gsap.from('.pizza_right_deco', {x: '100%', y: '-50%', ease: 'expo.out', duration: 0.2}),
            ]);

            const repeatTl = gsap.timeline({repeat: -1, yoyo: true})
            repeatTl.add([
                gsap.from('.pizza_edge_deco img', {rotate: 15, ease: 'steps(1)', duration: 0.2})
            ])

            gsap.timeline({
                scrollTrigger: {
                    trigger: '.pizza_edge_txt',
                    start: 'top 90%',
                    end: 'bottom center',
                    endTrigger: '.pizza_edge_btm',
                    // markers: true,
                    scrub: 0.5,
                },
            })
            .add([
                gsap.from('.pizza_edge .piece',{y: '75%', duration: 0.4, ease: 'none'}),
                gsap.from('.pizza_edge_deco02',{y: '100%', ease: 'none'}),
                gsap.from('.pizza_edge_deco03',{y: '100%', ease: 'none'}),
            ])

        }());

        (function() {//sauce

            gsap.timeline({
                scrollTrigger: {
                    trigger: '.sauce',
                    start: 'top 60%',
                },
            })
            .add([
                gsap.from('.sauce_tomato01 .sauce_tomato_shadow',{opacity: 0, scaleY: 0, skewX: -30, x: 40, y: -50, ease: 'expo.out', duration: 1.5, delay: 0.1}),
                gsap.from('.sauce_tomato01 .sauce_tomato_shadow02',{opacity: 0, scale: 0, skewX: -30, rotate: -60,  x: 0, y: '-10%', ease: 'expo.out', duration: 1.5, delay: 0.1}),
                gsap.from('.sauce_tomato02 .sauce_tomato_shadow',{opacity: 0, scaleY: 0, skewX: 30, x: 40, y: -50, ease: 'expo.out', duration: 1.5, delay: 0.4}),
                gsap.from('.sauce_tomato02 .sauce_tomato_shadow02',{opacity: 0, scaleY: 0, skewX: 10, x: 40, y: -50, ease: 'expo.out', duration: 1.5, delay: 0.4}),
                gsap.from('.sauce_tomato02 .sauce_tomato_shadow03',{opacity: 0, scaleY: 0, skewX: 10, x: 40, y: -50, ease: 'expo.out', duration: 1.5, delay: 0.4}),
            ])

            gsap.timeline({
                scrollTrigger: {
                    trigger: '.sauce',
                    start: 'top 30%',
                },
            })
            .add([
                gsap.from('.sauce_txt01',{x: '-150%', y: '150%', ease: 'power2.out', duration: 0.8}),
                gsap.from('.sauce_txt02',{x: '150%', y: '-150%', ease: 'power2.out', duration: 0.8}),
            ])
            .from('.sauce_object .sauce_object_shadow',{opacity: 0, scale: 0, skewX: -30, x: '-20%', y: '30%', ease: 'expo.out', duration: 1.5},'-=0.5')
            .from('.sauce_spoon',{y: '-140%', ease: 'expo.out', duration: 2},'-=1')

            $('.sauce_marquee01 .marquee-container').marquee({
                direction: 'horizontal',
                reverse: false,
                speed: 120,
                pauseOnHover: false,
                autoplay: true,
                grid: 1,
            });

            $('.sauce_marquee02 .marquee-container').marquee({
                direction: 'horizontal',
                reverse: true,
                speed: 120,
                pauseOnHover: false,
                autoplay: true,
                grid: 1,
            });

        }());

        (function() {//synd

            gsap.timeline({
                scrollTrigger: {
                    toggleActions: "restart complete resume reverse",
                    trigger: '.synd',
                    start: 'top 50%',
                },
            })
            .fromTo('.mainmenu', {y: '30%'}, {y: '0%', delay: 0.1, ease: 'linear'});
        }());

        (function() { //mainmenu
            $('.mainmenu_list').each(function(){
                gsap.timeline({
                    scrollTrigger: {
                        trigger: $(this),
                        start: 'top 60%'
                    }
                })
                .from($(this).find('.mainmenu_name_en'), {y: '150%', duration: 0.6, ease: 'expo.out'});
            });
        
            var _container = '.mainmenu_container';
            var initialItems = 6,
                list = 6,
                count = 1,
                start = 0,
                el = $('.mainmenu_list'),
                length = el.length;

            function showItems(){
                var end = initialItems + (list * (count - 1));
                el.hide().slice(0, end).show();
                if(end >= length){
                    $('.mainmenu_btn').remove();
                }
            }

            $('.mainmenu_btn').click(function(e){
                e.preventDefault();
                count++;
                showItems();
                ScrollTrigger.refresh();
            });
            showItems(); 
        })();

        (function() {//event

            tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.cheese',
                    start: 'top 50%',
                    end: 'top top',
                    scrub: 1,
                },
            })
            tl.fromTo('.cheese_wrap', {scaleY: 1, transformOrigin: 'center top'}, {scaleY: 1.5})

            function eventSlide() {
                new Swiper('.event_slide .swiper-container', {
                    loop: true,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    allowTouchMove: false,
                    spaceBetween: 30,
                    speed: 1200,
                    autoplay: {
                        delay: 1500,
                        disableOnInteraction: false,
                    },
                    navigation: {
                        nextEl: '.event_btns .event_btn_next',
                        prevEl: '.event_btns .event_btn_prev',
                    }
                })
            }

            if($('.event_slide .swiper-slide').length > 0){
                eventSlide();
            }
        }());

        (function () {
            const $floatingElement = $('.event_deco');
            ScrollTrigger.create({
                refreshPriority: -1,
                trigger: '.cheese_wrap',
                start: 'top bottom',
                endTrigger: '.store',
                end: 'top bottom',
                onLeaveBack: () => {
                    $floatingElement.removeClass('start end');
                },
                onLeave: () => {
                    $floatingElement.addClass('end');
                },
                onEnterBack: () => {
                    $floatingElement.removeClass('end');
                    $floatingElement.addClass('start');
                },
                onEnter: () => {
                    $floatingElement.addClass('start');
                },
            });
        })();
    })
}(jQuery))