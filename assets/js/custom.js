// letter by letter effect
const dynamicText =document.querySelector("h3 span");
const words =["Web Developer.","Android Developer."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect= ()=> {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking")

    if(!isDeleting && charIndex < currentWord.length)
        {
            charIndex++;
            setTimeout(typeEffect,100);
        }
        else if(isDeleting && charIndex>0)
            {
                charIndex--;
                setTimeout(typeEffect,100);
            }
            else{
                isDeleting = !isDeleting;
                dynamicText.classList.remove("stop-blinking")
                wordIndex = !isDeleting ? (wordIndex+1)% words.length : wordIndex;
                setTimeout(typeEffect,1000);
            }
}
typeEffect();




(function($) {
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("menu");
  var close = document.getElementById("menu-close");

  toggle.addEventListener("click", function(e) {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    } else {
      menu.classList.add("open");
    }
  });

  close.addEventListener("click", function(e) {
    menu.classList.remove("open");
  });

  // Close menu after click on smaller screens
  window.addEventListener("resize", function() {
    if (window.innerWidth < 846) {
      var mainMenuLinks = document.querySelectorAll(".main-menu a");
      for (var i = 0; i < mainMenuLinks.length; i++) {
        mainMenuLinks[i].addEventListener("click", function() {
          menu.classList.remove("open");
        });
      }
    }
  });

  var owlCarousel = document.querySelector(".owl-carousel");
  if (owlCarousel) {
    var owl = new Owl.Carousel(owlCarousel, {
      items: 4,
      lazyLoad: true,
      loop: true,
      dots: true,
      margin: 30,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  }

  var hoverElements = document.querySelectorAll(".hover");
  for (var i = 0; i < hoverElements.length; i++) {
    hoverElements[i].addEventListener("mouseleave", function() {
      this.classList.remove("hover");
    });
  }

  var isotopeWrappers = document.querySelectorAll(".isotope-wrapper");
  for (var i = 0; i < isotopeWrappers.length; i++) {
    var $isotope = isotopeWrappers[i].querySelector(".isotope-box");
    var $filterCheckboxes = isotopeWrappers[i].querySelectorAll('input[type="radio"]');

    var filter = function() {
      var type = "";
      for (var j = 0; j < $filterCheckboxes.length; j++) {
        if ($filterCheckboxes[j].checked) {
          type = $filterCheckboxes[j].dataset.type || "*";
          break;
        }
      }
      if (type !== "*") {
        type = '[data-type="' + type + '"]';
      }
      $isotope.classList.add("isotope");
      $isotope.isotope({ filter: type });
    };

    $isotope.classList.add("isotope");
    $isotope.isotope({
      itemSelector: ".isotope-item",
      layoutMode: "masonry"
    });

    for (var j = 0; j < $filterCheckboxes.length; j++) {
      $filterCheckboxes[j].addEventListener("change", filter);
    }
    filter();
  }

  var lightboxElements = document.querySelectorAll("[data-lightbox]");
  for (var i = 0; i < lightboxElements.length; i++) {
    lightboxElements[i].addEventListener("click", function(e) {
      e.preventDefault();
      var image = this.getAttribute("href");
      var caption = this.getAttribute("data-caption");
      var lightbox = document.createElement("div");
      lightbox.classList.add("lightbox");
      var img = document.createElement("img");
      img.src = image;
      var captionElement = document.createElement("p");
      captionElement.textContent = caption;
      lightbox.appendChild(img);
      lightbox.appendChild(captionElement);
      document.body.appendChild(lightbox);
      lightbox.addEventListener("click", function() {
        document.body.removeChild(this);
      });
    });
  }
})(jQuery);





