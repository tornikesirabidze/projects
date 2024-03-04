const shoopingdiv = document.getElementById("shoopingdiv2");
const watchbtn = document.getElementById("watchbtn");
const canonbtn = document.getElementById("canonbtn");
const phonebtn = document.getElementById("phonebtn");
const divwatch = document.getElementById("divwatch");
const divcanon = document.getElementById("divcanon");
const divapple = document.getElementById("divphone");
const watchdel = document.getElementById("watchdel");
const canondel = document.getElementById("canondel");
const phonedel = document.getElementById("phonedel");
const empty = document.getElementById("empty");
const total = document.getElementById("total");
const watchcount =document.getElementById("watchprice");
const canoncount =document.getElementById("cenonprice");
const phonecount =document.getElementById("phoneprice");


let count=0;
let number=0;
watchbtn.addEventListener("click", function(){
        divwatch.style.display="block"
        count+=200;
        total.textContent=count
        number++
        watchcount.textContent=number
});

let number1=0;
canonbtn.addEventListener("click", function(){
        divcanon.style.display="block";
        count+=700;
        total.textContent=count
        number1++
        canoncount.textContent=number1
});

let number2=0
phonebtn.addEventListener("click", function(){
        divapple.style.display="block";
        count+=400;
        total.textContent=count
        number2++
        phonecount.textContent=number2

});

//deletee buttton
 

watchdel.addEventListener("click", function(){
        count-=200
        number--
        if(number===0){
                divwatch.style.display="none";
        }
        watchcount.textContent=number
        total.textContent=count
});

canondel.addEventListener("click", function(){
        count-=700
        number1--
        if(number1===0){
                divcanon.style.display="none";
        }
        canoncount.textContent=number1
        total.textContent=count

})

phonedel.addEventListener("click", function(){
        count-=400
        number2--
        if(number2===0){
                divapple.style.display="none";
        }
        phonecount.textContent=number2
        total.textContent=count
})

empty.addEventListener("click", function(){
    divwatch.style.display="none";
    divcanon.style.display="none";
    divapple.style.display="none";
    count=0
    total.textContent=count
    number=0
    number1=0
    number2=0
})

