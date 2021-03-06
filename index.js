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


// ----------------vehicles----------------

var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
       
      },
      991: {
        slidesPerView: 3,
        
      },
    },
  });



  // ---------------featured--------------------

  var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
       
      },
      1040: {
        slidesPerView: 3,
        
      },
    },
  });



  // -----------------reviews-----------------


  var swiper = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
       
      },
      1040: {
        slidesPerView: 3,
        
      },
    },
  });


