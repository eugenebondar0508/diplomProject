const valid = () => {
  document.addEventListener('input', (event) => {
    if(event.target.matches('input[name = "fio"]')){
      event.target.value = event.target.value.replace(/[^А-Яа-яЁё\ '']/g, '')}
      if(event.target.matches('input[name = "tel"]')){
        event.target.value = event.target.value.replace(/[^0-9\+]/g, '');
    }
  
  }); 
}

export default valid;