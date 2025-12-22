let text = prompt("metni daxil edin");

let hasnumber = false

for (let i = 0; i < text.length; i++) {
    if (text [i] >= '0' && text[i] <= '9') {
        hasnumber = true;
        break
    }
}
 
if (hasnumber) {
    console.log("metnde reqem var");
    
} else {
    console.log("metnde reqem yoxdur");
}