for (let i=5; i>=1; i--){
    let str= "";
     for (let j=5; j>=1; j--){
        if(i>=j) {
         str+= "*";
        }
        else {
         str+= " ";
        }
     }
 for (let j=1; j<i; j++){
 if (i>=j){
     str+= "*";
 }
 else{
     str+= " ";
 }
 }
 console.log(str);
 }