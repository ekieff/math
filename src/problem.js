
import React from "react";

export default function Problem() {
  function greetUser(e) {
      e.preventDefault();
      var num = 40
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

  return (
    <div>
        <form>
            <label>
            Your Number: 
            <input type="number" name="num" defaultValue=""/>
            </label>
            <button type="submit" value="Submit" name="submit" onClick={(e)=>{greetUser(e)}}>Submit</button>
        </form>
    </div>
    
  );
}


// function Problem(e){
//     e.preventDefault();
//     var num = 12
//     var rounds = 0
//     while (num > 1){
//         if (num%2===0){
//             num= num/2
//             rounds += 1
//         }
//         else{
//             num = 3*num +1
//             rounds +=1
//         }
//     } 
//     console.log('The number is now 1 and it took ' +rounds +' rounds to get there.')
// }
