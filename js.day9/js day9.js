// const query = document.querySelector
// ("#content p");
// console.log(query);
// query.textContent="This is a query text context"


// // Query selector all 
// const query2 = document.querySelectorAll("p");
// console.log(query2,"query");
// for (let i=0;i<query2.length;i++){
//     query2[i].textcontent="this is a text content"
// }

const subHeading = document.getElementsByClassName("subheading");
console.log(subHeading);

for(let i=0;i<subHeading.length;i++){
    subHeading[1].style.color="blue";
}
for(let i=0;i<subHeading.length;i++){
    subHeading[3].style.color="blue";
}
for(let i=0;i<subHeading.length;i++){
    subHeading[0].style.color=" green";
}for(let i=0;i<subHeading.length;i++){
    subHeading[2].style.color="green";
}