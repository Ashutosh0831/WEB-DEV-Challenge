const reject = document.querySelector(".toogle-btn")
const accept = document.querySelector(".toogl-btn")
const cookieContainer = document.querySelector(".cookie-container")
const cross = document.querySelector("#cross")

const arr = [reject, accept, cross]

setInterval(()=>{
    cookieContainer.style.display = "block"
},2000)

reject.addEventListener("click", ()=>{
    cookieContainer.style.display = "none"
})

accept.addEventListener("click", ()=>{
    cookieContainer.style.display = "none"
})

cross.addEventListener("click", ()=>{
    cookieContainer.style.display = "none"
})





