import 'modern-normalize';

import Glider from 'glider-js';
import 'glider-js/glider.css';


import '../styles/index.scss';

document.addEventListener('DOMContentLoaded', function () {

  const calculateSlidesRoShow = () => {
    const viewportWidth = window.innerWidth;

    if (viewportWidth <= 768) {
      return 1;
    } else if (viewportWidth <= 1290) {
      return 2;
    } else {
      return 4;
    }
  };

  const manySlideGlider = new Glider(document.getElementById('manySlideGlider'), {
    slidesToShow: calculateSlidesRoShow(),
    dots: '.dots',
    draggable: true,
  });


  const manySlideGlider2 = new Glider(document.getElementById('manySlideGlider2'), {
    slidesToShow: calculateSlidesRoShow() / 1.25,
    dots: '#dots',
    draggable: true,
  });

  const oneSlideGlider = new Glider(document.getElementById('oneSlideGlider'), {
    slidesToShow: 1,
    dots: '#dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });

  const oneSlideGliderHero = new Glider(document.getElementById('oneSlideGliderHero'), {
    slidesToShow: 1,
    dots: '#dotsHero',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });



});






const accordions = document.getElementsByClassName("accordion");

for (const accordion of accordions) {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("accordion__title--active");
    const panel = accordion.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const accordionSections = document.querySelectorAll('.accordion__section');

  accordionSections.forEach((section) => {
    const header = section.querySelector('.accordion__header');
    const content = section.querySelector('.accordion__content');

    header.addEventListener('click', () => {
      section.classList.toggle('open');
      if (section.classList.contains('open')) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });
});