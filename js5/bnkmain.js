// const username = document.getElementById("username").value;

const passwordElement = document.getElementById("password");
const login = document.getElementById("Login");
const Create = document.getElementById("submit");
let accounts = [];


const storedAccounts = localStorage.getItem("accounts");
if (storedAccounts) {
    accounts = JSON.parse(storedAccounts);
}
console.log(accounts);

Create.addEventListener("click", function(){
    const username = document.getElementById("username").value;
    const password = passwordElement.value;
    accounts.push({ username, password });
    localStorage.setItem("accounts", JSON.stringify(accounts));

    console.log(accounts);
});

login.addEventListener("click", function(){
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = passwordElement.value;

    if (enteredUsername === "" || enteredPassword === "") {
        alert("Please enter both username and password");
    } else {
        const accountMatch = accounts.find(account => account.username === enteredUsername && account.password === enteredPassword);

        if (accountMatch) {
            window.location.href="bank.html"
            alert("Login successful!");
        } else {
            alert("Invalid username or password");
        }
        
    }
});