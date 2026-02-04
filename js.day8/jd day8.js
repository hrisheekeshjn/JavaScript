const heading = document.getElementById("myheading");
console.log(heading);

heading.style.color= "tomato";
heading.style.backgroundColor= "yellow";
console.log(heading.textContent );
heading.textContent ="Hello India!";


const subHeading = document.getElementsByClassName("subheading");
console.log(subHeading);

for(let i=0;i<subHeading.length;i++){
    subHeading[1].style.color="blue";
}