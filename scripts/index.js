// Store the wallet amount to your local storage with key "amount"
var tot=localStorage.getItem("amount") ||0
document.getElementById("wallet").innerText=tot
var sum = 0;
function addmoney(){

        var input = document.getElementById("amount").value;
       var loc =  localStorage.setItem("amount",input);
        sum = Number(tot)+Number(input);
        console.log(sum);
        localStorage.setItem("amount",sum);
        window.location.reload() 
}
