let nav = document.querySelector(".navigation")
let right_nav = document.querySelector(".nav-right");
let Mode = true;
 function Dark()
 {
    if(Mode ===true)
    {
        nav.classList.add("dark-on");
        right_nav.classList.add("dark-on");
        Mode=false;
        console.log("Dark on")
    }
    else
    {
        nav.classList.remove("dark-on");
        right_nav.classList.remove("dark-on");
        Mode=true;
        console.log("Dark off")
    }

 }