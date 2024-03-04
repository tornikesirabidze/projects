const exportp = document.getElementById("export");
const Createbtn = document.getElementById("Create");
const Depositbtn = document.getElementById("Deposit");
const Withdrawbtn = document.getElementById("Withdraw");
const checkbtn = document.getElementById("check");
const EXITbtn = document.getElementById("EXIT");
const username = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

let accounts=[]

let num=0;

Depositbtn.addEventListener("click", sss=function(){
    let Deposit=prompt("enter deposite : ");
    for(let i=0; i <Deposit; i++){
        num+=1
    }
    // exportp.textContent="balance"+":"+" " + num


})

Withdrawbtn.addEventListener("click", function(){
    let minus=prompt("Withdrawt balance: ")
    num-=minus
})


checkbtn.addEventListener("click", function(){
    exportp.textContent = "your balance are: " + num
    let number=num.value;
    accounts.push(number); 
    // window.location.reload();
})


EXITbtn.addEventListener("click", function(){
    window.location.href="bankmain.html"
})

