
let active

const all = document.querySelectorAll('.accordion-content'); //Needed a global const, so it's only run once
const allContent = Array.from(all);//Convert to an arraylist and not a node list

function runAccordions() {
  const accordions = document.querySelectorAll('.accordion section');
  
  if (!accordions) {
    return;
  }
  
  [].forEach.call(accordions, handleAccordion);
  
}

function handleAccordion(accordion, index) {
    
  const toggler = accordion.querySelector('.accordion-toggler');
  const content = accordion.querySelector('.accordion-content');
  
  if (!toggler || !content) {
    return;
  }
  
  toggler.addEventListener('click', event => handleTogglerClick(event, toggler, content));
}

function handleTogglerClick(event, toggler, content) {
  event.preventDefault();
  if(content.style.maxHeight==0) {
      [].forEach.call(allContent,closeOthers);
      content.style.maxHeight = content.scrollHeight +"px"; //Opens the content
  }
  else {
    content.style.maxHeight = null; //Closes the content
  }
}
function closeOthers(item) {
    item.style.maxHeight = null; //Closes the content
}

window.addEventListener('load', runAccordions);