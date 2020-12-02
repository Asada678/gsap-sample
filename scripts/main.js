'use strict';

const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.menu');
const navItems = navbar.querySelectorAll('.nav-item');

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
console.log('ScrollTrigger:', ScrollTrigger);
gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline();
const tlHero = gsap.timeline({
  scrollTrigger: { trigger: '#hero' }
});
const tlAbout = gsap.timeline({
  scrollTrigger: { trigger: '#about' }
});

tl
  .to('.overlay', {
    y: '100%',
    duration: 1,
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

  tlAbout.from('#about h2', {
    y: 200,
    opacity: 0,
    duration: .7,
  }, '+=.3')
