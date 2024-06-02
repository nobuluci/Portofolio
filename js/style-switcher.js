/* ===================== toggle style switcher ===================== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style - switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.toggle("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/* ===================== theme colors ===================== */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }   
    })
}
         function one()
        {
            document.getElementById('image').src='images/luci_photo_without_bg.png';
        }
        function two()
        {
            document.getElementById('image').src='images/luci_photo_without_bg.png';
        }
        function tree()
        {
            document.getElementById('image').src='images/luci_photo_without_bg.png';
        }
        function four()
        {
            document.getElementById('image').src='images/luci_photo_without_bg.png';
        }
        function five()
        {
            document.getElementById('image').src='images/luci_photo_without_bg.png';
        }
/* ===================== theme light and dark mode ===================== */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon"); 
    document.body.classList.toggle("white");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})