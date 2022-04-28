// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

var id;
async function search(){
try{
    var query=document.getElementById("search").Value;
    var res= await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=d507915e&s=${query}`)
    var data=await res.json();
    console.log(data)
    var movies=data.Search;

    console.log(movies)
    append (movies)
    return movies
    
}
catch(err){
console.log(err)
}   
}
function append (data){

document.getElementById("display").innerHTML=null;
data.map(function(el){
    var div=document.createElement("div")

var p=document.createElement("p")
p.innerText=el.Title;
var img=document.createElement('img')
img.src=el.image; 
var btn=document.createElement("button")
btn.innerText="Book Now" 
btn.setAttribute("class","book_now") 
btn.addEventListener("click", function(){
bookmyshow(el)
})
})
div.append(image,p,btn)
document.getElementById("movies").append(div)

}
async function main(){
       
    var data = await search();
    if(data==undefined){
        return false;
    }
    append(data);

 }
 function debo(func,delay){

    if(id){
       clearTimeout();
    }

  id =   setTimeout(function(){
      func();
    },delay)
 }

var tot=localStorage.getItem("amount") ||0
document.getElementById("wallet").innerText=tot

function  bookmyshow(el){

    localStorage.setItem("movie",JSON.stringify(el));


}