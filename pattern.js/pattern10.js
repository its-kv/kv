for (let i=1; i<5; i++){
    let str= "";
    let count= i;
     for (let j=4; j>=1; j--){
        if(i>=j) {
         str+= count++;
        }
        else {
         str+= " ";
        }
     }
     count-= 2
 for (let j=1; j<i; j++){
 if (i>=j){
     str+= count--;
 }
 else{
     str+= " ";
 }
 }
 console.log(str);
 }