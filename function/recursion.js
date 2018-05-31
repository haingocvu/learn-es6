let myRecursion = (num)=>{
    if(typeof num != 'number') throw new Error('not a number');
    if(num <= 0){
        return 1;
    }else{
        return num * myRecursion(num - 1);
    }
}

try {
    console.log(myRecursion(6));
} catch (error) {
    console.log(error + '');
}