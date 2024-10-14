let str="aioiu";
let b= "";
for (let i=str.length-1; i>=0; i--){
    b+=str[i];
 }
 if (str==b){
    console.log(true);
}
else {
    console.log(false);
}