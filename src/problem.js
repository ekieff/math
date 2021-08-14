
function problem(){
    var num = 12
    var rounds = 0
    while (num > 1){
        if (num%2===0){
            num= num/2
            rounds += 1
        }
        else{
            num = 3*num +1
            rounds +=1
        }
    } 
    console.log('The number is now 1 and it took ' +rounds +' rounds to get there.')
}
problem()