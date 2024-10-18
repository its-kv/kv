let x=1;
for (let i=0; i<=4; i++){
    let str = "";
    for (let j=0; j<=i; j++){
        if (i==0){
        str+= 1;
        }
        else {
            str+= 11**i;
            break;
        }
    }
    console.log(str);
}