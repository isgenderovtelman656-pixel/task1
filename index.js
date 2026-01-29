// birinci tapsiriq
document.addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        console.log("Enter");
        
    }
})

// ikinci tapsiriq
document.getElementById("myForm").addEventListener("submit", function(e){
    e.preventDefault();

    let password = 
    document.getElementById("password").value;

    if(password.length > 5){
        console.log("icaze verildi");
        
    }else{
        console.log("giris qadagandir");
        
    }
});
