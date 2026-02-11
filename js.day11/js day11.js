function handleClick(){
    document.querySelector("#head").style.color="red";
    document.getElementById("btn").textContent="color changed";
}
 const handleClick = () => {
     const image = document .createElement("img");
     image.src = "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=";
    
     image.setAttribute("alt", "image");
    
     document.getElementById("content").appendChild(image);
 }



    