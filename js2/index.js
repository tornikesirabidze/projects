

const buttonbtn = document.getElementById("button");
const span = document.getElementById("code")
const ukanafoni = document.getElementById("body")


const arr=[ "0","1","2","3","4","5","6","7","8",
"9","A","B","C","D","E","F"]


buttonbtn.addEventListener("click", function(){
    let hex="#"
    for(let i=0; i<6; i++){
        hex+=arr[Math.trunc(Math.random() * arr.length)] 
    }
    if (span.innerHTML==="#26e684" ){
        span.innerHTML=hex
    }
    else{
        span.innerHTML=hex
    }

    ukanafoni.style.backgroundColor=hex
})

