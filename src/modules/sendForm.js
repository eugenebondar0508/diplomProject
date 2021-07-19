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
      if(!formPhone.value || formPhone.value.length <  5 || formPhone.value.length > 14){
        formPhone.style.border = 'solid red';
        return;
      } else if(!formName.value || formName.value.length < 2){
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

};

export default sendForm;