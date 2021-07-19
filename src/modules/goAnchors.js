const goAnchors = () => {
  const services = document.querySelector('a[href*="services"]');
  const faq = document.querySelector('a[href*="faq"]');
  const contacts = document.querySelector('a[href*="contacts"]');
  const anchors = [services,faq,contacts];
  for (let anchor of anchors){
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'

        })
    })
}
};

export default goAnchors;