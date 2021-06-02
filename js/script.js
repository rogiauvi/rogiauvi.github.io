const menuToggle = document.querySelector('.menu-togle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');

});

const links = document.querySelectorAll(".nav a"); 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop - 55,
    behavior: "smooth"
  });
}