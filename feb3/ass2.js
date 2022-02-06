var restoreString = function(s, indices) {
    let letters = new Array(s.length);
    for(let i=0; i<s.length; i++) {
        letters[indices[i]] = s.charAt(i);
    }
    return letters.join('');

};

let s = "codeleet";
let array = [4,5,6,7,0,2,1,3];
console.log(restoreString(s,array));
document.write(restoreString(s,array));
