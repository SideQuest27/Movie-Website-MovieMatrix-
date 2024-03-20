const left_btn=document.querySelector("#left-btn");
const right_btn = document.querySelector("#right-btn");
const images = document.querySelectorAll("main #banner-slider img");
left_btn.addEventListener("click",(event)=>prevSlide())
right_btn.addEventListener("click",(event)=>nextSlide())
let slide = 0;

let intervalId = setInterval(()=>{
    slide++;
    if(slide>images.length-1)
    {
        slide=0;
    }
    else if(slide<0)
    {
        slide=images.length-1
    }
    displayImages();
},5000);

function displayImages()
{
    if(slide>images.length-1)
    {
        slide=0;
    }
    else if(slide<0)
    {
        slide=images.length-1
    }
    for(let img of images)
    {
        img.style.display="none";
    }
    images[slide].style.display="block";
}

function nextSlide(){
    clearInterval(intervalId);
    slide++;
    displayImages();
}

function prevSlide(){;
    clearInterval(intervalId);
    slide--;
    displayImages();
}

const scrollContainer = document.querySelectorAll(".movie-cards-scroll");
for(const item of scrollContainer){
    item.addEventListener('wheel',(event)=>{
        event.preventDefault();
        item.scrollLeft+=event.deltaY
    })
}

const genre_block = document.querySelector("#genres-tab");
const genre_elem = document.querySelector("#genre-li").addEventListener("click",(()=>genre_block.classList.toggle("showItms")));

const country_block = document.querySelector("#country-tab");
const country_elem = document.querySelector("#country-li").addEventListener("click",(()=>country_block.classList.toggle("showItms")));

displayImages();