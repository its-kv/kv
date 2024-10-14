function countVowels(str){
    let count= 0;
    let conso= 0;
    for(let i of str ){
        if (i==="a" || i==="e" || i==="o" || i==="i" || i==="u"){
            count++;
        }
        else {
            conso++;
        }
    }
console.log("the no. of vowels =" +count + "\n","the no. of consonants =" + conso);
}
countVowels("kartikeya vashishtha");