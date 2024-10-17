for (let i=0; i<5; i++){
   let str= "";
    for (let j=5; j>=0; j--){
       if(i>=j) {
        str+= "*";
       }
       else {
        str+= " ";
       }
    }
for (let j=1; j<5; j++){
if (i>=j){
    str+= "*";
}
else{
    str+= " ";
}
}
console.log(str);
}