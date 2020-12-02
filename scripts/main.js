'use strict';

const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
  navbar.classList.toggle('open')
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
  .from('.logo', {
    x: -60,
    opacity: 0,
    duration: .7
  })
  .from('.menu', {
    x: 60,
    opacity: 0,
    duration: .7
  }, '-=.5')
  .from('.hero-textbox h1', {
    y: 60,
    opacity: 0,
    duration: .7,
  },)
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