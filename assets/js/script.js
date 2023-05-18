// Transition during scroll

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});


const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElementsR = document.querySelectorAll('.hidden-r');
const hiddenElementsT = document.querySelectorAll('.hidden-t');


hiddenElements.forEach((el) => observer.observe(el));
hiddenElementsR.forEach((el) => observer.observe(el));
hiddenElementsT.forEach((el) => observer.observe(el));


// counter
let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplays) => {
  let startValue = 0
  let endValue = parseInt(valueDisplays.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplays.textContent = startValue;
    if(startValue == endValue) {
      clearInterval(counter);            
    }
  }, duration);
});



// Shitty navigation
const changeBtn1 = document.getElementById('changeBtn-1')
const   changeBtn2 = document.getElementById('changeBtn-2')
const  changeBtn3 = document.getElementById('changeBtn-3');
const Toki1 = document.getElementById('Toki-1')
const  Toki2 = document.getElementById('Toki-2')
const  Toki3 = document.getElementById('Toki-3');    

changeBtn1.addEventListener('click', () => {
  Toki1.style.display = 'flex';
  Toki2.style.display = 'none';
  Toki3.style.display = 'none';
  changeBtn2.classList.remove('active');
  changeBtn3.classList.remove('active')
}); 
changeBtn2.addEventListener('click', () => {
  changeBtn1.classList.remove('active');
 changeBtn2.classList.add('active');
  changeBtn3.classList.remove('active') 
  Toki1.style.display = 'none';
  // Toki3.style.display = 'none';
  Toki2.classList.remove('d-none');  
  Toki2.style.display = 'flex;'  
  
}); 
changeBtn3.addEventListener('click', () => {
  changeBtn1.classList.remove('active');
  changeBtn2.classList.remove('active');
  changeBtn3.classList.add('active');
  Toki1.style.display = 'none';
  Toki2.style.display = 'none';  
  Toki3.classList.remove('d-none');
  Toki3.style.display = 'flex';
}); 
    


// window.onscroll = function() {myFunction()};
// var navbar = document.getElementById('navbar');
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if(window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");    
//   }else {
//     navbar.classList.remove("sticky")
//   }
// };