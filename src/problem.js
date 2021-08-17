
import React, {useState} from "react";

export default function Problem() {
var [number, setNum] = useState()
  function submitNumber(e) {
      console.log(number)
      e.preventDefault();
      var rounds = 0
      let num = number
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
            console.log(num)
        console.log('The number is now 1 and it took ' +rounds +' rounds to get there.')
  }
  function tryIt(e){
      console.log(e.target.value)
      setNum(e.target.value)
      console.log(number)

  }

  return (
    <div>
        <form>
            <label>
            Your Number: 
            <input type="number" name="num" defaultValue="" onChange={(e)=>{tryIt(e)}}/>
            </label>
            <button type="submit" value="Submit" name="submit" onClick={(e)=>{submitNumber(e)}}>Submit</button>
        </form>
    </div>
    
  );
}
