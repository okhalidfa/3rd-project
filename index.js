let currentTab = "all"
const tac =["bg-navy", "border-navy","text-white"];
const tina =["bg-transparent","text-slate-700","border-state-200","text-black"];

const allcon = document.getElementById("all-c")
const incon = document.getElementById("all-c")
const recon = document.getElementById("all-c")

function switchTab(tab){ 
    const tabs=["all", "interview", "rejected"]
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

      
}
document.addEventListener("DOMContentLoaded", ()=>{
    switchTab(currentTab);
});