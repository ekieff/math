console.log('Hello World')
function problem(){
    var num = 12
    while (num > 1)
{
    if (num%2 ==0){
        console.log('It is an even number')
        num= num/2
        console.log(num)
    }
    else{
        console.log('it is an odd number')
        num = 3*num +1
        console.log(num)
    }
} 
}
problem()