for (let i=4; i>0; i--){
    let str= "";
    for (let j=0; j<5; j++){
        if (i<=j){
            if(i%2==0){
                str+= "*";
            }
           else{ 
            str+= "-";
           }
        }
        else {
            str+= " ";
        }
    }console.log(str);
}
for (let i=0; i<5; i++){
    let str= "";
    for (let j=0; j<5; j++){
        if (i<=j){
            if(i%2==0){
                str+= "*";
            }
           else{ 
            str+= "-";
           }
        }
        else {
            str+= " ";
        }
    }
    console.log(str);
}
