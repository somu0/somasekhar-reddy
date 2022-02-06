let arr = ['+',4,3,4,7,8,5,6,9,4];

function addOrMul(arg) {
    let l = arg.length;
    if (l<3)
    return (-1);
    if (arg[0] == '+')
    add(arg);
    else
    mul(arg);

}

function add(item) {
    let res = 0;
    for (let i = 1; i < item.length; i++ ) {
        res = res + item[i];
    }
    console.log(res);
}

function mul(item) {
    let res = 1;
    for (let i = 1; i < item.length; i++ ) {
        res = res * item[i];
    }
    console.log(res);
}
addOrMul(arr);
