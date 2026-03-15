let currentTab = "all"
const tac =["bg-navy", "border-navy","text-white"];
const tina =["bg-transparent","text-slate-700","border-slate-200","text-black"];

let allcon;
let incon;
let recon;
let tos;
let toi;
let tor; 
let ems;
let avas;
function switchTab(tab){ 
    const tabs=["all", "interview", "rejected"]
    currentTab= tab;
     for (const y of tabs){
        const tabname =document.getElementById("t"+y)
        if(y===tab){
            tabname.classList.remove(...tina);
            tabname.classList.add(...tac);
        }
        else{
            tabname.classList.remove(...tac);
            tabname.classList.add(...tina);

        }
     }
    allcon.classList.add("hidden")
    incon.classList.add("hidden")
    recon.classList.add("hidden")
    
     if (tab === "all"){
        allcon.classList.remove("hidden"); 
     }

     else if (tab==="interview"){
        incon.classList.remove("hidden")
        
        
     }
     else{
        recon.classList.remove("hidden")
        
    }  

    updat();
}

// document.getElementById("job-c").addEventListener("click",function(event){
//     const ce= event.target;
//     const card= clickedElement.closest(".card")
//     const status = card.equerySelector(".status")

//     if (clickedElement.classList.contains("interview")){
//         status.innertext = "Interviewed";
//         incon.appendChild(card);
//     }
//     if (clickedElement.classList.contains("rejected")){
//         status.innertext = "Rejected";
//         incon.appendChild(card);
//     }if (clickedElement.classList.contains("delete")){
//         status.innertext = "interview";
//         incon.appendChild(card);
//     }


// })
document.addEventListener("DOMContentLoaded", ()=>{
    
 allcon = document.getElementById("all-container")
 incon = document.getElementById("interview-container")
 recon = document.getElementById("rejected-container")
 tos= document.getElementById("st")
 toi= document.getElementById("si")
 tor= document.getElementById("sr")
 tos.innerText= allcon.children.length;
 ems= document.getElementById("empty-state")
 avas= document.getElementById("ava")

 document.getElementById("job-c").addEventListener("click",function(event){

    const clickedElement= event.target;
    const card= clickedElement.closest(".card");
    const pare= card.parentNode
    const status = card.querySelector(".status")

    if (clickedElement.classList.contains("interview")){

       status.innerText = "Interviewed";
       incon.appendChild(card);
    }
    if (clickedElement.classList.contains("rejected")){
    
         status.innerText = "Rejected";
        recon.appendChild(card);
    }
    if (clickedElement.classList.contains("delete")){
        pare.removeChild(card)
    }
    updat();
    switchTab(currentTab);

  })

  function updat(){
    toi.innerText=incon.children.length;
    tor.innerText=recon.children.length;
    const counts={
        all: allcon.children.length,
        interview: incon.children.length,
        rejected: recon.children.length,
    };
    tos.innerText = counts.all;
    toi.innerText =counts.interview;
    tor.innerText =counts.rejected;

    if(currentTab==="all") avas.innerText=counts.all;
    if(currentTab==="interview") avas.innerText=counts.interview;
    if(currentTab==="rejected") avas.innerText=counts.rejected;
    if (counts[currentTab]<1){
        ems.classList.remove("hidden")
    }
     else{
        ems.classList.add("hidden");   
    }
    
  }
  updat();
  switchTab(currentTab);

});

