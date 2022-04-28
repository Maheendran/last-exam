// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
var tot=localStorage.getItem("amount") ||0
document.getElementById("wallet").innerText=tot
var number_of_seats=document.getElementById("number_of_seats").value
var ticketprice= number_of_seats*100
function confrim(){
   
   if(tot<ticketprice){
    alert("Insufficient Balance!")
}else{
    sum=number(tot)-number(ticketprice)
    localStorage.setItem("amount",sum)
    window.location.reload();
    alert("Booking successful!" )
} 


}
var printmovie=JSON.parse(localStorage.getItem("movie"))
var movie=document.getElementById("movie")
printmovie.map(function(el){
    var title=document.createElement("h1")
    title.innerText=el.Title;
    var img=document.createElement("img")
    img.src=el.image;
    movie.append(title,image)

})

