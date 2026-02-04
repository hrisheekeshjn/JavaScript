const head = document.getElementById("heading");
console.log(head.innerText) //it will only show the visible text
console.log(head.textContent) //it will show all the text including hidden text
console.log(head.innerHTML) //it will show all the text with its tag/element

// DOM MODIFICATION
// CREATE A NEW ELEMENT AND SET ITS CONTENT
const newParagraph = document.createElement("p");
newParagraph.textContent="this is a dynamically created paragrapgh.";
console.log(newParagraph.textContent);

//APPEND THE NEW ELEMENT TO THE CONTAINER
const CONTAINER = document.getElementById("container");
CONTAINER.appendChild(newParagraph);
// REMOVE AN ELEMENT
const para =document.querySelector("#container p")
para.remove();

//alternate method
//document.queryselector("#container p").remove();  

let date = new Date();
console.log(date);

setTimeout(() => {
    ("welcome");
    alert("offer is vailid today");
},5000);

setInterval(() => {
    let date = new Date();
console.log(date);
},1000)

//event handle
function handleClick(){
    document.getElementById("output").textContent = "button clicked";
}