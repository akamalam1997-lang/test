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

// Wait until everything is loaded
window.addEventListener("load", () => {

    showLoading();

    setupButtons();

    setupMusic();

});



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

            nextScene("scanner");

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

function nextScene(id){

    document
    .querySelectorAll(".screen")
    .forEach(screen=>{

        screen.classList.remove("active");

        screen.classList.add("hidden");

    });

    showScene(id);

    if(id==="scanner"){

        startScanner();

    }

}



/* ==========================================
Future Scanner
========================================== */

function startScanner(){

    const progress=document.getElementById("scanProgress");

    const status=document.getElementById("scanStatus");

    if(!progress) return;

    progress.style.width="0%";

    let value=0;

    const messages=[

        "Searching memories...",

        "Finding happiest moments...",

        "Checking future dreams...",

        "Almost ready...",

        "Future found ❤️"

    ];

    let msg=0;

    const timer=setInterval(()=>{

        value++;

        progress.style.width=value+"%";

        if(value%20===0){

            if(status){

                status.innerHTML=messages[msg];

            }

            msg++;

        }

        if(value>=100){

            clearInterval(timer);

            setTimeout(()=>{

                nextScene("memories");

            },1200);

        }

    },45);

}



/* ==========================================
Background Music
========================================== */

let bgMusic;

function setupMusic(){

    bgMusic=document.getElementById("bgMusic");

    if(!bgMusic) return;

    bgMusic.volume=0.25;

    document.body.addEventListener("click",()=>{

        bgMusic.play().catch(()=>{});

    },{once:true});

}



/* ==========================================
Fade Utilities
========================================== */

function fadeIn(element){

    element.style.opacity=0;

    element.style.display="block";

    let op=0;

    const timer=setInterval(()=>{

        op+=0.05;

        element.style.opacity=op;

        if(op>=1){

            clearInterval(timer);

        }

    },20);

}

function fadeOut(element){

    let op=1;

    const timer=setInterval(()=>{

        op-=0.05;

        element.style.opacity=op;

        if(op<=0){

            clearInterval(timer);

            element.style.display="none";

        }

    },20);

}



/* ==========================================
Helper
========================================== */

function sleep(ms){

    return new Promise(resolve=>setTimeout(resolve,ms));

}

console.log("Birthday Website Part 1 Loaded ❤️");
/* =====================================================
   Part 2
   Memory Slideshow
====================================================== */

const memories = [

{
title:"💍 The Day We Became One",

description:"Two hearts... One promise... Forever begins here ❤️",

image:"assets/photos/wedding.jpg"
},

{
title:"🥰 Our First Selfie",

description:"From strangers... to best friends... to soulmates.",

image:"assets/photos/selfie.jpg"
},

{
title:"👶 Our Little Princess",

description:"Then our little miracle arrived and changed our world forever.",

image:"assets/photos/newborn.jpg"
},

{
title:"👨‍👧 The Best Father",

description:"Watching you become a father made me love you even more ❤️",

image:"assets/photos/father1.jpg"
},

{
title:"😴 Like Father, Like Daughter",

description:"One sleeps... One copies... My two favorite people ❤️",

image:"assets/photos/sleeping.jpg"
},

{
title:"🏡 Our Future",

description:"Every dream starts with us. Our next chapter begins here.",

image:"assets/photos/future-home.jpg"
}

];

let memoryIndex=0;


/* ==========================================
Start Memories
========================================== */

function startMemories(){

memoryIndex=0;

showMemory();

}



/* ==========================================
Display One Memory
========================================== */

function showMemory(){

const img=document.getElementById("memoryImage");

const title=document.getElementById("memoryTitle");

const desc=document.getElementById("memoryDescription");

const memory=memories[memoryIndex];

title.style.opacity=0;
desc.style.opacity=0;
img.style.opacity=0;

setTimeout(()=>{

img.src=memory.image;

title.innerHTML=memory.title;

desc.innerHTML=memory.description;

img.style.opacity=1;

title.style.opacity=1;

desc.style.opacity=1;

animateZoom(img);

},500);


memoryIndex++;

if(memoryIndex<memories.length){

setTimeout(showMemory,5000);

}

else{

setTimeout(()=>{

nextScene("gallery");

startGallery();

},6000);

}

}



/* ==========================================
Zoom Animation
========================================== */

function animateZoom(img){

img.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.12)"

}

],

{

duration:5000,

fill:"forwards",

easing:"ease-in-out"

});

}



/* ==========================================
Override nextScene
========================================== */

const originalNextScene=nextScene;

nextScene=function(id){

document.querySelectorAll(".screen").forEach(scene=>{

scene.classList.remove("active");

scene.classList.add("hidden");

});

showScene(id);

switch(id){

case "scanner":

startScanner();

break;

case "memories":

startMemories();

break;

}

}

console.log("Part 2 Loaded ❤️");
/* =====================================================
   PART 3
====================================================== */

function startGallery(){

const envelope=document.getElementById("openLetter");

const letter=document.getElementById("letterContent");

envelope.onclick=function(){

envelope.style.transform="scale(.8) rotate(20deg)";

setTimeout(()=>{

envelope.style.display="none";

letter.classList.remove("hidden");

letter.classList.add("show");

},800);

}

document
.getElementById("giftBtn")
.onclick=function(){

nextScene("future");

}

}



/* ==========================================
Gift
========================================== */

const gift=document.getElementById("giftBox");

if(gift){

gift.onclick=function(){

gift.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.3) rotate(15deg)"

},

{

transform:"scale(1)"

}

],

{

duration:1200

});

launchConfetti();

setTimeout(()=>{

nextScene("video");

},1800);

}

}



/* ==========================================
Play Video
========================================== */

const playBtn=document.getElementById("playVideo");

if(playBtn){

playBtn.onclick=function(){

document
.getElementById("video")
.classList.add("hidden");

document
.getElementById("birthdayVideoSection")
.classList.remove("hidden");

fadeMusic();

const video=document.getElementById("birthdayVideo");

video.play();

video.onended=function(){

showEnding();

}

}

}



/* ==========================================
Ending
========================================== */

function showEnding(){

nextScene("ending");

launchFireworks();

launchConfetti();

}



/* ==========================================
Music Fade
========================================== */

function fadeMusic(){

if(!bgMusic) return;

let vol=bgMusic.volume;

const timer=setInterval(()=>{

vol-=0.05;

bgMusic.volume=vol;

if(vol<=0){

clearInterval(timer);

bgMusic.pause();

}

},200);

}



/* ==========================================
Confetti
========================================== */

function launchConfetti(){

confetti({

particleCount:250,

spread:180,

origin:{y:.6}

});

}



/* ==========================================
Fireworks
========================================== */

function launchFireworks(){

let duration=6000;

let animationEnd=Date.now()+duration;

(function frame(){

confetti({

particleCount:6,

angle:60,

spread:55,

origin:{x:0}

});

confetti({

particleCount:6,

angle:120,

spread:55,

origin:{x:1}

});

if(Date.now()<animationEnd){

requestAnimationFrame(frame);

}

})();

}

console.log("Part 3 Loaded ❤️");
