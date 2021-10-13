const menubtn=document.querySelector("#menu-btn")
const navbar=document.querySelector(".navbar")
const header=document.querySelector(".header")




menubtn.addEventListener("click",()=>{
    menubtn.classList.toggle("fa-times")
    navbar.classList.toggle("active")
})


window.onscroll=()=>{
   if(window.scrollY>0){
       header.classList.add('active')
   }else{
       header.classList.remove('active')
   }

    menubtn.classList.remove("fa-times")
    navbar.classList.remove("active")
}