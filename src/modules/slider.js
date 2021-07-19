const slider = () =>{
  const slide = document.querySelectorAll('.item');
  let currentSlide = 0;
  const topSlider = document.querySelector('.top-slider');

  const autoPlaySlide = () => {

    slide[currentSlide].style.display = 'none';
    currentSlide++;
    if(currentSlide >= slide.length){
      currentSlide = 0;
    }
    slide[currentSlide].style.display = 'block';
    if(slide[currentSlide].style.display = 'block'){
      slide[currentSlide].querySelector('.table').classList.add('active');
    }

  };

  const startSlide = () => {
    setInterval(autoPlaySlide, 3000);
  };

  startSlide();

};

export default slider;