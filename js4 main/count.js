const decreasebtn = document.getElementById("decrease");
const resetbtn = document.getElementById("reset");
const increasebtn = document.getElementById("increase")
const nullh = document.getElementById("null")

let count=0;

increasebtn.addEventListener("click", function(){
    count++;
    nullh.textContent=count
    if(count>0){
        nullh.style.color="green"
    }
    if(count===0){
        nullh.style.color="black"
    }   
});
decreasebtn.addEventListener("click", function(){
    count--;
    nullh.textContent=count
    if(count<0){
        nullh.style.color="red"
    }
    if(count===0){
        nullh.style.color="black"
    }    
});
resetbtn.addEventListener("click", function(){
    count=0;
    nullh.textContent=count
    nullh.style.color="black"
      
});
