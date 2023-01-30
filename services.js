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