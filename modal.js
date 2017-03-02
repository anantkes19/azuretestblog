
var isOpen = false;
var modalList = [];
var lastActive = false;
function runModals() {
      const modalContainers = document.querySelectorAll('.modal__container');
      
      
      if (!modalContainers) {
        return;
      }
      
      [].forEach.call(modalContainers, modalContainer => {
        
        const modalActivator = modalContainer.querySelector('.modal__activator')
        const modalContent = modalContainer.querySelector('.modal__content');
        const modalClose = modalContent.querySelector('.modal__close');
        const leftClick = modalContent.querySelector('.modal__left');
        const rightClick = modalContent.querySelector('.modal__right');
        
        modalList.push(modalContent);
        
        if (!modalContent || !modalActivator) {
          return;
        }
        modalClose.addEventListener('click', event => handleClose(event));
        
        modalActivator.addEventListener('click', event => handleTogglerClick2(event, modalContent));
        
        leftClick.addEventListener('click', event => handleLeft(event));
        
        rightClick.addEventListener('click', event => handleRight(event));
        // etc. Add event listener to activate/deactivate modal when the link is clicked.
        // Maybe make this an ES6 class if this function gets too long. 
      });
    }
  function handleClose(event) {
    var curModals = document.querySelectorAll('.modal__content');
        [].forEach.call(curModals, modal => {
          modal.style.display = 'none';
          isOpen = false
          document.querySelector('body').style.overflow = 'visible';
          lastActive.focus();
        });
  }
  function handleTogglerClick2(event, content) {
    event.preventDefault();
    
    if(content.style.display == 0 | content.style.display =='none') {
      if(isOpen == false) {
        lastActive = document.activeElement;
        document.querySelector('body').style.overflow = 'hidden';
        content.style.display =  'block'; //Opens the content
        isOpen = true;
        
      }
    }
    else {
      document.querySelector('body').style.overflow = 'visible';
      content.style.display = 'none'; //Closes the content
      isOpen = false;
      lastActive.focus();
    }
  }
  function handleLeft(event) {
    var curModals = document.querySelectorAll('.modal__content');
     for (let modal of curModals) {
       /*Using let modal of curModals so I can break out, for each doesn't allow breaking*/
       if (modal.style.display == 'block') {
         
         modal.style.display = 'none';
         
         curModals[mod(modalList.indexOf(modal)-1, modalList.length)].style.display = 'block';
         break;
        }
     };
  }
function handleRight(event) {
    var curModals = document.querySelectorAll('.modal__content');
     for (let modal of curModals) {
       /*Using let modal of curModals so I can break out, for each doesn't allow breaking*/
       if (modal.style.display == 'block') {
         
         modal.style.display = 'none';
         
         curModals[mod(modalList.indexOf(modal)+1, modalList.length)].style.display = 'block';
         break;
        }
     };
  }

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        handleClose(evt);
   }
   else if (evt.keyCode == 39 & isOpen == true) {
     handleRight(evt);
   }
  else if (evt.keyCode == 37 & isOpen == true) {
     handleLeft(evt);
   };
  
  
  
};
function mod(n, m) {
        return ((n % m) + m) % m;
}
  window.addEventListener('load', runModals);