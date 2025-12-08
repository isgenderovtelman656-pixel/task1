// birinci tapsiriq
function tarixCevir(tarix){
    let [il, ay, gun] = tarix.split(".");

    const aylar = {
        "01":  "yanvar",
        "02":  "fevral",
        "03":  "mart",
        "04":  "aprel",
        "05":  "may",
        "06":  "iyun",
        "07":  "iyul",
        "08":  "avqust",
        "09":  "sentyabr",
        "10":  "oktyabr",
        "11":  "noyabr",
        "12":  "dekabr"
    };
    return `${Number(gun)} ${aylar[ay]} ${il}-ci il`;
}
console.log(tarixCevir("2025.12.08"));

// ikinci tapsiriq
let ayNomresi = prompt("Ayin nomresini daxil edin (1-12);");
  let aylar = [
    "yanvar",
    "fevral",
    "mart",
    "aprel",
    "may",
    "iyun",
    "iyul",
    "avqust",
    "sentyabr",
    "oktyabr",
    "noyabr",
    "dekabr",
]
let index = Number(ayNomresi) - 1;
if (index >= 0 && index < 12){
    console.log(aylar[index]);
} else{
    console.log("Duzgun ay nomresinin daxil edin");
    
}