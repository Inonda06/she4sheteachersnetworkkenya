const image= document.querySelectorAll('#image')
const content= document.querySelectorAll('#content')

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