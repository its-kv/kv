function invertedTriangle(rows) {
    for (let i = 0; i < rows; i++) {
        let pattern = "";
        
        for (let j = 0; j < i; j++) {
            pattern += " ";
        }
        
        for (let k = 0; k < (2 * (rows - i) - 1); k++) {
            if (k == 0 || k == (2 * (rows - i) - 2)) {
                pattern += "*";
            } else {
                pattern += "-";
            }
        }
        
        console.log(pattern);
    }
}

const rows = 5;
invertedTriangle(rows);