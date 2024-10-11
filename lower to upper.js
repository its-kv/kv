function kv(s)
{
    let STR= "";
    for(let i=0; i<s.length; i++){
    
    let newStr= s.charCodeAt(i)-32;
    if (newStr>=65 && newStr<=91){
    STR+=String.fromCharCode(newStr);}
    else {
        console.log("Already consist a capital letter");
        break;
    }
}
return STR;
}


let s="Kv";
let b="hihiuhiu";
console.log(kv(s));
console.log(kv(b));