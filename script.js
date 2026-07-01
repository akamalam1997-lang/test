/* =====================================================
   Happy Birthday Vignesh ❤️
   Part 1
====================================================== */
let currentScene = 0;
let typingFinished = false;
// Scene Order
const scenes = [
    "loading",
    "welcome",
    "scanner",
    "memories",
    "gallery",
    "future",
    "video",
    "ending"
];
const flame = document.getElementById("flame");
const birthdaySection = document.getElementById("birthdaySection");
const button = document.getElementById("blowBtn");
window.addEventListener("load", () => {

    showLoading();

    setupButtons();


});



// Wait until everything is loaded





/* ==========================================
Loading Screen
========================================== */

function showLoading(){

    const loading=document.getElementById("loading");

    if(!loading) return;

    let percent=0;

    const text=document.getElementById("loadingText");

    const bar=document.getElementById("loadingBar");

    const timer=setInterval(()=>{

        percent++;

        if(text)
            text.innerHTML=percent+"%";

        if(bar)
            bar.style.width=percent+"%";

        if(percent>=100){

            clearInterval(timer);

            setTimeout(()=>{
               hideScene("loading");
                showScene("welcome");
startBirthdayFireworks();
                startTyping();

            },600);

        }

    },30);

}



/* ==========================================
Typewriter
========================================== */

function startTyping(){

    const target=document.getElementById("typing");

    if(!target) return;

    new Typed("#typing",{

        strings:[
            "Happy Birthday Vignesh ❤️",
            "Are you excited to see your 34th year?",
            "I have something special for you..."
        ],

        typeSpeed:55,

        backSpeed:20,

        backDelay:1500,

        showCursor:true,

        loop:false,

        onComplete:function(){

            typingFinished=true;

            document.getElementById("futureBtn")
            ?.classList.add("show");

        }

    });

}



/* ==========================================
Buttons
========================================== */

function setupButtons(){

    const futureBtn=document.getElementById("futureBtn");

    if(futureBtn){

        futureBtn.addEventListener("click",()=>{

           /* nextScene("scanner");*/

        });

    }

}



/* ==========================================
Scene Navigation
========================================== */

function hideScene(id){

    const scene=document.getElementById(id);

    if(scene){

        scene.classList.remove("active");

        scene.classList.add("hidden");

    }

}

function showScene(id){

    const scene=document.getElementById(id);

    if(scene){

        scene.classList.remove("hidden");

        scene.classList.add("active");

    }

}






