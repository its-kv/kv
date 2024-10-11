function kv(s)
{
    let STR= "";
    for(let i=0; i<s.length; i++){
    
    let newStr= s.charCodeAt(i)+32;
   
    STR+=String.fromCharCode(newStr);}
   
    

return STR;
}


let s="Kv";
let b="BKJBK";
console.log(kv(s));
console.log(kv(b));