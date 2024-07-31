// GSAP Animations and ScrollTrigger setup
document.addEventListener("DOMContentLoaded", function () {
    // GSAP Animation for fade-in elements
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.fade-in').forEach(element => {
        gsap.fromTo(element,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        ); rgba(124, 32, 32, 0.1)
    });

    // Animation for category items
    gsap.utils.toArray('.category-item').forEach(item => {
        gsap.fromTo(item,
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });
});
