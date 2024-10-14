let str= "hivsockm@@#%$52184";
let v=0;
let s=0;
let n=0;
for(let i=0;i<str.length; i++){
    if((str.charCodeAt(i)>=65 || str.charCodeAt(i)<=90) && (str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122)){
        v++;
    }
    else if((str.charCodeAt(i)>=33 && str.charCodeAt(i)<=38) || str.charCodeAt(i)==40){
        s++;
    }
    else if(str.charCodeAt(i)>=48 || str.charCodeAt(i)<=57){
        n++;
    }
        
}
console.log ("the no. of alphabets=" + v + "\n",
    "the no. of special characters =" + s +"\n",
    "the no. of numbers = " + n +"\n");

