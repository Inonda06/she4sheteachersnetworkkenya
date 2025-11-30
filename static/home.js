var typed= new Typed('.typing',{
    strings:['Welcome to she 4 she teachers Network',' Joining female educators','for groth and meaningfully engagements within and beyond school environment','Come Join us',],
    typeSpeed:90,
    BackSpeed:70,
    loop:true,
})

const slide = new Swiper('.swiper', {
    autoplay:{
        delay:2800,
        disableonInteraction: false,  
    },
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

const menubar= document.getElementById('hum');
const linkbar= document.querySelector('.links')
const closbtn=document.getElementById('close')

const zero=0
const ahun= 100

const humburger= function(){
    linkbar.style.transform=`translateX(${zero})`
}

const closemenu= function(){
    linkbar.style.transform=`translateX(${ahun}%)`
}
console.log('Hello')

menubar.addEventListener('click',()=>{
    humburger()
    console.log('Hello')
})

closbtn.addEventListener('click',()=>{
    closemenu()
    console.log('Hello')
})


const header=document.getElementById('1')
const header1=document.getElementById('2')
const header2=document.getElementById('3')
const header3=document.getElementById('4')
const content1=document.getElementById('#1')
const content2=document.getElementById('#2')
const content3=document.getElementById('#3')
const content4=document.getElementById('#4')
const animated=document.querySelectorAll('.animated-bg')
const animatedtxt=document.querySelectorAll('.animated-bg-txt')

setTimeout(getdata,6500)


function getdata(){
    header.innerHTML='<img src="static/image/WhatsAppImage2025-11-06at16.36.34_f18a7cbf.jpg" alt="">'
    header2.innerHTML='<img src="static/image/Finacial Literacy.jpeg" alt="">'
    header1.innerHTML='<img src="static/image/capacity Building.jpeg" alt="">'
    header3.innerHTML='<img src="static/image/networking.jpeg" alt=""></div>'
    animated.forEach((bg)=>bg.classList.remove('animated-bg'))
    animatedtxt.forEach((bg)=>bg.classList.remove('animated-bg-txt'))
    content1.classList.remove('animated-bg-txt')
    content1.classList.remove('animated-bg')
}

window.addEventListener('scroll',checkboxes)

function checkboxes(){
    const trigger=window.innerHeight / 5 * 4

    image.forEach(img=>{
        const boxtop=img.getBoundingClientRect().top
         if (boxtop <trigger){
            img.classList.add('show')
         }else{
            img.classList.remove('show')
         }
    })
    content.forEach(cont=>{
        const conttop=cont.getBoundingClientRect().top
         if (conttop <trigger){
            cont.classList.add('show')
         }else{
            cont.classList.remove('show')
         }
    })
}








