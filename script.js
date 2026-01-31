/* ================= FLOWERS ================= */

for(let i=0;i<25;i++){
    const f=document.createElement("div");
    f.className="flower";
    f.style.left=Math.random()*100+"%";
    f.style.top=Math.random()*100+"%";
    f.style.animationDelay=Math.random()*8+"s";
    document.getElementById("flowers").appendChild(f);
}

/* ================= NO BUTTON ESCAPE ================= */

const noBtn=document.getElementById("noBtn");
const yesBtn=document.getElementById("yesBtn");
let yesScale=1;

function moveNo(){
    const parent=document.querySelector(".buttons");
    const maxX=parent.clientWidth-80;
    const maxY=parent.clientHeight-40;

    noBtn.style.left=Math.random()*maxX+"px";
    noBtn.style.top=Math.random()*maxY+"px";

    yesScale+=0.2;
    yesBtn.style.transform=`scale(${yesScale})`;
}

noBtn.addEventListener("mouseenter",moveNo);
noBtn.addEventListener("touchstart",function(e){
    e.preventDefault();
    moveNo();
});

/* ================= YES CLICK ================= */

yesBtn.addEventListener("click",()=>{
    document.getElementById("questionArea").style.display="none";
    document.getElementById("planner").style.display="block";
});

/* ================= OPTION SELECTION ================= */

const cards=document.querySelectorAll(".option-card");
const hiddenInput=document.getElementById("dateSpot");

cards.forEach(card=>{
    card.addEventListener("click",()=>{
        cards.forEach(c=>c.classList.remove("selected"));
        card.classList.add("selected");
        hiddenInput.value=card.dataset.value;
    });
});