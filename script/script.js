'use strict';
// callback menu
const showCallbackMenu = () =>{
  const modalCallback = document.querySelector('.modal-callback');
  const modalOverlay = document.querySelector('.modal-overlay');
  const closeModalBtn = document.querySelector('.modal-close');
  const header = document.querySelector('.header');
  const questSection = document.querySelector('.quest-section');

  header.addEventListener('click', (event) => {
    if(event.target.matches('.callback-btn')){
      modalCallback.style.display = 'block';
      modalOverlay.style.display= 'block';
    }
  });

  document.addEventListener('click', (event) =>{
    if(event.target.matches('.modal-overlay')){
      modalCallback.style.display = 'none';
      modalOverlay.style.display= 'none';
    }
  });
  closeModalBtn.addEventListener('click', (event) =>{
      modalCallback.style.display = 'none';
      modalOverlay.style.display= 'none';
  });

  questSection.addEventListener('click', (event) => {
    if(event.target.matches('.button-services')){
      modalCallback.style.display = 'block';
      modalOverlay.style.display= 'block';
  }
})

}

showCallbackMenu();

// slider

const slider = () =>{
  const slide = document.querySelectorAll('.item');
  let currentSlide = 0;

  const autoPlaySlide = () => {

    slide[currentSlide].style.display = 'none';
    currentSlide++;
    if(currentSlide >= slide.length){
      currentSlide = 0;
    }
    slide[currentSlide].style.display = 'block';

  };

  const startSlide = () => {
    setInterval(autoPlaySlide, 3000);
  };

  startSlide();

}
slider();

// carousel

const carousel = () =>{
  const options = {
    main: '.services-elements',
    wrap:'.services-carousel',
    next:'.arrow-right',
    prev:'.arrow-left',
    slideToShow: 3,
    infinity: true,

    responsive:[{
      breakpoint: 1024,
      slideToShow: 3
    },
    {      breakpoint: 768,
      slideToShow: 2
    },
    {
      breakpoint: 576,
      slideToShow: 1
    }
  ]
  }

  const carousel = new SliderCarousel(options);
  carousel.init();
}

carousel();


// accordeon 

const accordeon = () =>{
  const accordeon = document.querySelector('.accordeon');
  const elements = accordeon.querySelectorAll('.element');

  for(let i = 0; i < elements.length; i++){
    elements[i].classList.remove('active');
    elements[i].querySelector('.element-content').style.display = 'none';
    elements[i].addEventListener('click', () => {
      elements[i].classList.toggle('active');
      if(elements[i].classList.contains('active')){
        elements[i].querySelector('.element-content').style.display = 'block';
      } else {
        elements[i].querySelector('.element-content').style.display = 'none';
      }
    })
  }
  


}
accordeon();


