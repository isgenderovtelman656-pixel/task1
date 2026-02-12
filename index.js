let buttons = document.querySelectorAll(".button-container button");
let images = document.querySelectorAll(".image-container img");

function showSection(type){
  if(type === "all"){
    
    images.forEach(img => img.style.display = "inline-block");
    document.querySelectorAll(".section").forEach(sec => sec.style.display = "none");
  } else {
    
    images.forEach(img => {
      img.style.display = img.getAttribute("data-type") === type ? "inline-block" : "none";
    });
    document.querySelectorAll(".section").forEach(sec => sec.style.display = "none");
    document.getElementById(type).style.display = "block";
  }
}

buttons.forEach(btn => {
  btn.addEventListener("click", function(){
    let type = this.getAttribute("data-type");
    showSection(type);
  });
});

images.forEach(img => {
  img.addEventListener("click", function(){
    let type = this.getAttribute("data-type");
    showSection(type);
  });
});