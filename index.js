const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const blockId = anchor.getAttribute('href').substr(1);
        document.getElementById(blockId).scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    })
}

// calendar
const dayNumder = new Date().getDate();
const year = new Date().getFullYear();
const dayName = new Date().toLocaleString("default", {weekday: "long"});
const monthName = new Date().toLocaleString("default", {month: "long"});

document.querySelector(".monthName").innerHTML = monthName;
document.querySelector(".dayName").innerHTML = dayName;
document.querySelector(".dateNumber").innerHTML = dayNumder;
document.querySelector(".year").innerHTML = year;
//slider section Three

var slides = document.querySelectorAll('.images');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

var navigation = function (item) {
  slides.forEach((images) => {
    images.classList.remove('active');
  });
  btns.forEach((btn) => {
    btn.classList.remove('active');
  });
  slides[item].classList.add('active');
  btns[item].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    navigation(i);
    currentSlide = 1;
  })
});

//images autoplay navigation

var repeat = function(activeClass) {
  let active = document.getElementsByClassName('active');
  let i = 1;
  var repeater = () => {
  setTimeout( function() {
    [...active].forEach((activeSlides) => {
      activeSlides.classList.remove('active');
    })
    slides[i].classList.add('active');
    btns[i].classList.add('active');
    i++;
    
    if(slides.length == i) {
      i=0;
    }
    if(i >= slides.length) {
      return;
    }
    repeater();
  }, 30000);
 }
  repeater();
}
repeat();

// scroll button 
window.addEventListener('scroll', function() {
  const scroll = document.querySelector('.scrollBtn');
  scroll.classList.toggle('active', window.scrollY>500)
});

function backTop(){
  window.scrollTo({
      top:0,
      behavior: 'smooth'
  })
}






