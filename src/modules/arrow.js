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

 export default arrow;