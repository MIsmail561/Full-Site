

$(".nav-item a").click(function(){
    let aHref = $(this).attr("href");
    let linkOffset = $(aHref).offset().top;
    $("body,html").animate({scrollTop:linkOffset} , 1000)
})

$("#scrollBtn").click(function(){
    $("body").animate({scrollTop:0} , 2000)
})


let prgOffset = $("#prgOffset").offset().top;

    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop();

        if(scrollTop > prgOffset)
        {
            $(".navbar").css("backgroundColor" , "#00BEFF" , 2000);
        }
        else
        {
            $(".navbar").css("backgroundColor" , "transparent" , 2000);
        }
    })


    $(document).ready(function(){
        $(".loading").fadeOut(2000);
    })



let lightboxItem = document.querySelector(".lightbox-item");
let lightboxContainer = document.querySelector(".lightbox-container");
let potfolioImg = document.getElementsByClassName("potfolio-img");
let wClose = document.getElementById("wClose");


for(let i= 0;i< potfolioImg.length; i++)
{
    potfolioImg[i].addEventListener("click", function(eventInfo){
        
    
        lightboxContainer.classList.add("show");
        
        let imgSrc = eventInfo.target.src;
          
        lightboxItem.style.backgroundImage = "url("+imgSrc+")";
    })
} 
wClose.addEventListener("click", function(){
    lightboxContainer.classList.remove("show");
})

document.addEventListener("keydown" , function(e){

    if(e.keyCode == 27)
    {
        lightboxContainer.classList.remove("show");
    }
})
    




