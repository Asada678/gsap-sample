'use strict';

const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.menu');
const  navItems = navbar.querySelectorAll('.nav-item');

menu.addEventListener('click', () => {
  navbar.classList.toggle('open')
});

navItems.forEach(item => {
  item.addEventListener('click', event => {
    if (navbar.classList.contains('open')) {
      navbar.classList.remove('open');
    }
  });
});
// console.log('ScrollTrigger:', ScrollTrigger);

gsap.registerPlugin(ScrollTrigger)
const trigger = (el) => {
  return {
    // markers: true,
    trigger: el,
    start: "top 40%",
    // end
  }
}

const tl = gsap.timeline();
const tlHero = gsap.timeline({
  scrollTrigger: {
    trigger: '#hero',
    start: "top 40%",
  }
});
const tlAbout = gsap.timeline({
  scrollTrigger: trigger('#about')
});
const tlWorks = gsap.timeline({
  scrollTrigger: trigger('#works')
});
const tlContact = gsap.timeline({
  scrollTrigger: trigger('#contact')
});
const tlLinks = gsap.timeline({
  scrollTrigger: trigger('#links')
});

tl
  .to('.overlay', {
    y: '200%',
    duration: 1.2,
    stagger: .3
  })
  .from('header', {
    y: '-100%',
    opacity: 0,
    duration: .5,
  })
  .from('.logo', {
    x: -60,
    opacity: 0,
    duration: .7,
  }, '-=.2')
  .from('.menu', {
    x: 60,
    opacity: 0,
    duration: .7
  }, '-=.2');

tlHero
  .from('.hero-clipped', {
    scaleX: 0,
    x: '100%',
    duration: 1,
    scrollTrigger: { trigger: '.hero' }
  })
  .from('.hero-textbox h1', {
    y: 60,
    opacity: 0,
    duration: .7,
  })
  .from('.hero-textbox h2', {
    y: 60,
    opacity: 0,
    duration: .7,
  }, '-=.3')
  .from('.hero-textbox .cta-btn', {
    y: 60,
    opacity: 0,
    duration: .7,
  }, '-=.1')

tlAbout
  .from('#about h2', {
    x: 200,
    opacity: 0,
    duration: .7,
  })
  .from('#about .about-img', {
    x: -200,
    opacity: 0,
    duration: .7,
  }, '-=.2')
  .from('#about .about-info', {
    x: 200,
    opacity: 0,
    duration: .7,
  }, '-=.2')
tlWorks.from('#works h2', {
  x: 200,
  opacity: 0,
  duration: .7,
}, '-=0')
.from('#works .work-card', {
  y: 100,
  opacity: 0,
  duration: .7,
  stagger: 0.4
}, '-=0.2')
tlContact
  .from('#contact h2', {
  x: 200,
  opacity: 0,
  duration: .7,
}, '-=0')
  .from('#contact p', {
  y: 80,
  opacity: 0,
  duration: .7,
}, '-=0.2')
tlLinks
  .from('#links h2', {
    x: 200,
    opacity: 0,
    duration: .7,
  }, '-=0')
  .from('#links i', {
    y: 50,
    opacity: 0,
    duration: .7,
    stagger: .3
  }, '-=0.2')
