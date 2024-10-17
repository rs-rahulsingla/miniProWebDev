let lastScrollPostion = 0;
let navbar = document.querySelector(".navbar");
let vdoPreviews = document.querySelectorAll(".videoContainer video");
let scrollHeading2 = document.querySelector("#scrollHeading2");
let submitBtn = document.querySelector(".contactUs button");

window.addEventListener("scroll", () => {
    let currScrollPosition = window.scrollY;
    if(currScrollPosition > 500){
        navbar.style.backgroundColor = "#D8D2C2";
    }
    if(currScrollPosition < 550){
        navbar.style.backgroundColor = "transparent";
    }
});

vdoPreviews.forEach(video => {
    video.addEventListener("mouseenter", () => {
        setTimeout(() => {
            video.play();
        }, 300);
    })
    video.addEventListener("mouseleave", () => {
        setTimeout(() => {
            video.pause();
        }, 300);;
    })
});

scrollHeading2.addEventListener("click", () => {
    window.scrollTo({
        top: 1010,
        left: 0,
        behavior: "smooth"
    })
});

submitBtn.addEventListener("click", () => {
    let email = document.querySelector("#exampleFormControlInput1").value;
    let message = document.querySelector("#exampleFormControlTextarea1").value;
    console.log(`Message recieved from email ${email}, Message - ${message}`);
});