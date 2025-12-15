// birinci tapsiriq
function isValidNumber(phone) {
    phone = String(phone);
    if (phone.startsWith("+7") && phone.length ===12) {
        return true;
    }
    return false;
}
console.log(isValidNumber("+71234567890"));


// ikinci tapsiriq
const capitalizeWords = t =>
    t.replace(/\b\w/g, c => c.toUpperCase());

console.log(capitalizeWords("hello my is harry"));
