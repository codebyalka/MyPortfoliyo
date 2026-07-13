const about = document.querySelector("#about");

window.addEventListener("scroll", () => {
    const position = about.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (position < screen - 100) {
        about.style.opacity = "1";
        about.style.transform = "translateY(0)";
    }
});


const skillCards = document.querySelectorAll(".one");

skillCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.05)";
        card.style.boxShadow = "0 0 25px #7c3aed";
        card.style.cursor = "pointer";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
        card.style.boxShadow = "none";
    });

});

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
        card.style.boxShadow = "0 0 25px #7c3aed";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "none";
    });

});
const sendBtn =
document.getElementById("sendBtn");

sendBtn.addEventListener("mouseover",() =>{
    sendBtn.style.background= "9333ea";
    sendBtn.style.boxShadow = "0 0 20px #7c3aed";
});
sendBtn.addEventListener("mouseout",()=>{
    sendBtn.style.background="#7c3aed";
    sendBtn.style.boxShadow="none"
});
sendBtn.addEventListener("click",()=>{
    alert("Thank you for contacting me!");
});
