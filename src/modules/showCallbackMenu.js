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

export default showCallbackMenu;