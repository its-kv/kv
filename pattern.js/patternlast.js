for (let i=0; i<4; i++){
    let str= "";
for (let j=4; j>0; j--){
    if (i>=j){
        str+= "*";
    }
    else {
        str+= " ";
    }
}
for (let j=0; j<5; j++){
    if(i>=j){
        str+= "*";
    }
    else {
        str+= " ";
    }
    if(i%2==0){
        str+= "-"
    }
}console.log(str);
}
// for(let i=4; i>=0; i--){
//     let str= "";
//     for(let j=4; j>=0; j--){
//         if(i>=j){
//             str+= "*";
//         }
//         else {
//             str+= " ";
//         }
//     }
//     for (let j=1; j<=i; j++){
//         if (i>=j){
//             str+= "*";
//         }
//         else {
//             str+= " ";
//         }
//     }console.log(str);
// }