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

const tl = gsap.timeline();
tl
  .to('.overlay', {
    y: '100%',
    duration: 1,
    stagger: .3
  })
  .from('.hero-clipped', {
    scaleX: 0,
    x: '100%',
    duration: 1
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
  .from('header', {
    y: '-100%',
    opacity: 0,
    duration: .7
  })
  .from('.logo', {
    x: -60,
    opacity: 0,
    duration: .7
  })
  .from('.menu', {
    x: 60,
    opacity: 0,
    duration: .7
  }, '-=.2')