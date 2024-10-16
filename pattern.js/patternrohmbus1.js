let str = "";
for (let i=0; i<=5; i++){
for (let j=1; j<=i; j++){
if (i<=j){
    for (let x=0; x<=5; x++){
    str+= "*";
    }
}
else{
    str+= " ";
}
}
str+= "\n"
}
console.log(str);