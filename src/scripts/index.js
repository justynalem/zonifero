import Glider from "glider-js";
import "modern-normalize";
import "glider-js/glider.css";

import "../styles/index.scss";

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

document.addEventListener("DOMContentLoaded", function () {
  new Glider(document.getElementById("manySlideGlider"), {
    slidesToShow: calculateSlidesRoShow(),
    dots: ".dots",
    draggable: true,
  });

  new Glider(document.getElementById("manySlideGlider2"), {
    slidesToShow: calculateSlidesRoShow() / 1.25,
    dots: "#dots",
    draggable: true,
  });

  new Glider(document.getElementById("oneSlideGlider"), {
    slidesToShow: 1,
    dots: "#dots",
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
  });

  new Glider(document.getElementById("oneSlideGliderHero"), {
    slidesToShow: 1,
    dots: "#dotsHero",
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
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

  const accordionSections = document.querySelectorAll(".accordion__section");

  accordionSections.forEach(section => {
    const header = section.querySelector(".accordion__header");
    const content = section.querySelector(".accordion__content");

    header.addEventListener("click", () => {
      section.classList.toggle("open");
      if (section.classList.contains("open")) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});
