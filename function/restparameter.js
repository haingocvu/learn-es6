let sum = (...nums)=>{
    let sum = 0;
    nums.forEach((num)=>{
        if(typeof num != 'number') throw new Error('not a number');
        sum += num;
    })
    return sum;
}
try {
    console.log(sum(2, 4, 6));
    //console.log(sum('2', 4, 6));
} catch (error) {
    console.log(error + '');
}