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

  const modalCallback = document.querySelector('.modal-callback');
  const modalOverlay = document.querySelector('.modal-overlay');
  const slider = document.querySelectorAll('.slider__item');
  slider.forEach((elem) => {
    elem.addEventListener('click', (event) =>{
      if(event.target.matches('.absolute')){
        modalCallback.style.display = 'block';
        modalOverlay.style.display= 'block';
      }
    })
  })
};

export default carousel;