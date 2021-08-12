console.log('Hello World')
function problem(){
    var num = 12
    var rounds = 0
    while (num > 1){
        if (num%2 ==0){
            console.log('It is an even number')
            num= num/2
            rounds += 1
            console.log('the new number is ' +num +' and the round is ' +rounds)
        }
        else{
            console.log('it is an odd number')
            num = 3*num +1
            rounds +=1
            console.log('the new number is ' +num +' and the round is ' +rounds)
        }
    } 
}
problem()