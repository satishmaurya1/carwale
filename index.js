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



// ----------------login----------------------


const loginbtn=document.getElementById("login-btn");
const loginform= document.querySelector(".login-form-container");
const closeform=document.querySelector("#login-form-container");

loginbtn.addEventListener("click",()=>{
     loginform.classList.add('active')
})


closeform.addEventListener("click",()=>{
    loginform.classList.remove('active')
});



// ---------------home-----------------



document.querySelector('.home').onmousemove = (e)=>{
    document.querySelectorAll(".home-paralax").forEach(element=>{
        let speed=element.getAttribute("data-speed");

        let x=(window.innerWidth - e.pageX+speed)/90;
        let y=(window.innerHeight - e.pageY+speed)/90;

        element.style.transform=`translateX(${y}px)  translateY(${x}px)`;
    });
}


document.querySelector('.home').onmouseleave = ()=>{
    document.querySelectorAll(".home-paralax").forEach(element=>{
       

        element.style.transform=`translateX(0px)  translateY(0px)`;
    });
}