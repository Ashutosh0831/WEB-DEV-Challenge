var btn = document.querySelector("button");
var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var outerdiv = document.querySelector('.outerdiv')
var innerdiv = document.querySelector(".inner");

a = 0;

var start = Math.floor(Math.random())*100
console.log(start);

btn.addEventListener("click", () => {
    
 var del =  setInterval(() => {
    a++
    
    h2.innerHTML = a + '%'
    innerdiv.style.width = a + '%'
    btn.style.opacity = '3.0'
  }, 50);

  setTimeout(function() {
    clearInterval(del);
    btn.style.opacity = 0.5
    btn.style.pointerEvents = 'none'
    btn.innerHTML = 'Downloaded'

    var h3 = document.createElement('h3')
    h3.innerHTML = 'your song is donwloaded'

    outerdiv.appendChild(h3)
  }, 5000);


});
