//select popupbox,popupoverlay,button-add button//
var popupbox=document.querySelector(".popupbox")
var popupoverlay=document.querySelector(".popupoverlay")
var button=document.getElementById("add-popup")
button.addEventListener("click",function(){
    popupbox.style.display= "block";
    popupoverlay.style.display="block";

})

//select cancel button//
var cancel=document.getElementById("cancel-book")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    popupbox.style.display= "none";
    popupoverlay.style.display="none";
})

//select container,title,author,description --add book//
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitle=document.getElementById("title")
var bookauthor=document.getElementById("author")
var description=document.getElementById("description")
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","life-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${description.value}
    </p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupbox.style.display= "none";
    popupoverlay.style.display="none";
    

})
//to delete the notes//

function deletebook(event){
    event.target.parentElement.remove()

}