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
};

export default accordeon;