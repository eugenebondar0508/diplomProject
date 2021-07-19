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
}

carousel();


// accordeon 

const accordeon = () =>{
  const accordeon = document.querySelector('.accordeon');
  const elements = accordeon.querySelectorAll('.element');
  const titles = accordeon.querySelectorAll('.title');
  const content = accordeon.querySelectorAll('.element-content');
  const toggleContent = (index) =>{
    for(let i = 0; i < content.length; i++){
      if(index === i){
        content[i].style.display = 'block';
        content[i].parentNode.classList.add('active');
      } else{
        content[i].style.display = 'none';
        content[i].parentNode.classList.remove('active');
      }
    }
  }
 
    accordeon.addEventListener('click', (event) =>{
    let target = event.target;

      if(target.matches('.title')){
        titles.forEach((item, i ) =>{
        if(item === target){

          toggleContent(i);
         }
        });
        return;
      }


  })
}
accordeon();


// arrow 


  const arrow = () =>{
    const up = document.querySelector('.up');
    let scrolled;
    let timer;
    up.style.display = 'none';

    up.addEventListener('click', () => {
      scrolled = window.pageYOffset;
      scrollToTop();
    });

    function scrollToTop() {
      if(scrolled > 0){
        window.scrollTo(0, scrolled);
        scrolled = scrolled - 100;
        timer = setTimeout(scrollToTop, 15);
      } else {
        clearTimeout(timer);
        window.scrollTo(0, 0);
      }
    }
    
    window.addEventListener('scroll', () => {
      if(pageYOffset < document.documentElement.clientHeight ){
        up.style.display = 'none';
      } else {
        up.style.display = 'block';
      }
    })
   }
   arrow();




// valid form 

const valid = () => {
  document.addEventListener('input', (event) => {
    if(event.target.matches('input[name = "fio"]')){
      event.target.value = event.target.value.replace(/[^А-Яа-яЁё\ '']/g, '')}
      if(event.target.matches('input[name = "tel"]')){
        event.target.value = event.target.value.replace(/[^0-9\+ ]/g, '');
    }
  
  }); 
}
valid();


// sent form 

const sendForm = () =>{
  const errorMessage = 'Что-то пошло не так... ';
  const loadMessage = 'Загрузка...';
  const successMessage = 'Спасибо! Мы скоро с вами свяжемся';
  const form = document.getElementById('callback');
  const statusMessage = document.createElement('div');
  const formName = form.querySelector('input[name ="fio"]');
  const formPhone = form.querySelector('input[name ="tel"]');
  statusMessage.style.cssText = 'font-size: 2rem';
  const inputs = [formName, formPhone];
  const clearInputs = () => {
    inputs.forEach(item => {
        item.value = '';
    })
};


  document.addEventListener('submit', (event) =>{
    event.preventDefault();
    if(event.target.matches('form')){
      if(!formPhone.value){
        formPhone.style.border = 'solid red';
        return;
      } else if(!formName.value){
        formName.style.border = 'solid red';
        return;
      }
      
      else {
        formName.style.border = 'none';
        formPhone.style.border = 'none';
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
      }
    };


    if(event.target.matches('form')){
      const formData = new FormData(event.target);
  
  
      let body = {};
      formData.forEach((value, key) => {
      body[key] = value;
    });
  
    postData(body, () => {
      statusMessage.textContent = successMessage;
      }, (error) => {
      statusMessage.textContent = errorMessage;
      console.error(error);
      });
    }
  });


  const postData = (body, outputData, errorData) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if(request.readyState !== 4 ){
            return;
        } 

        if(request.status === 200){
            outputData(); 
            clearInputs();
        } else {
            errorData(request.status);                  
        }
    });

    request.open('POST', './server.php');
    request.setRequestHeader('Content-Type', 'application/json');

    request.send(JSON.stringify(body));
}

}

sendForm();