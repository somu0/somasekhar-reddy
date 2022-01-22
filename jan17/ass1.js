function areanagram(str1,str2){
    let n1=str1.length;
    let n2=str2.length;
    if(n1!=n2)
        return false;
    str1.sort();
    str2.sort();

    for(let i=0;i<n1;i++)
        if(str1[i]!=str2[i])
        return false;
    return true;
}
let str1=['t','e','s','t'];
let str2=['t','e','s','t'];
    if(areanagram(str1,str2))
        document.write("the two strings are" + "anagram of each other");
    else
    document.write("the two strings are not" + "anagram of each other");

