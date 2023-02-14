const links = document.querySelector('.navU');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', ()=>{
    hamburger.style.display = 'block'
   if (links.style.display === "block") {
     links.style.display="none"
  } else {
    links.style.display = "block";
     
  }
     
});