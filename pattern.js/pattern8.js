 for (let i=0; i<5; i++){
        str= "";
        for(let j=0; j<5; j++){
            if (i>=j){
                str+= "*";
            }
            else{
                str+= " ";
            }
        }
        for (let j=0; j<5; j++){
            if (i<=j){
                str+= "*";
            }
            else{
                str+= " ";
            }
        }
        console.log(str);
    }