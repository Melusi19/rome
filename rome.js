function ArabicToRoman(num) {
    let roman = "";
    const roNum = {
        M:1000,
        CM:900, 
        D:500,
        CD:400, 
        C:100, 
        XC:90,
        L:50, 
        XV:40, 
        X:10, 
        IX:9, 
        V:5, 
        IV:4, 
        I:1
    };
    let a;
    
    if(num < 1 || num > 3999)
    return "Enter a number between 1 and 3999";
    else {
        for(let b in roNum) {
            a = Math.floor(num / roNum[b]);
            if (a >= 0) {
                for(let i = 0; i < a; i++) {
                    roman += b;
                }
            }
            num = num % roNum[b];
        }
    }
    return roman;
}

const getRoman = function(roman, roNum) {
    return getRoman;

console.log(ArabicToRoman(a))
