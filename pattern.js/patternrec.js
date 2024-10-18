for (let i=0; i<3; i++){
    let str=""; 
    for(j=0; j<5; j++){
        if(i==1 && j>0 && j<=3){
        str+= " ";
        }
        else {
            str+= "*";
        }
    }console.log(str);
}