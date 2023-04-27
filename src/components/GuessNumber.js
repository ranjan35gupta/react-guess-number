import {  useState } from "react"
import './GuessNumber.css'
export function GuessNumber() {

    const num = Math.floor((Math.random() * 10) + 1)
    const [number, setNumber] = useState(1)
    const [randomnum, setrandomnum] = useState(num)
    const [ans, setAns] = useState('')
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState()


    function handleEvent() {
        let yoursNumber = number
        console.log(typeof yoursNumber)
        setCount(count + 1)
        if(yoursNumber.trim()===''){
            alert("it is not a number")
            
        }
        
        else if (yoursNumber < randomnum ) {
            alert("you guessed a smaller number")



        }
        else if (yoursNumber > randomnum) {
            alert("you guessed a bigger number")


        }
        else if(yoursNumber==randomnum){


            setAns(`Congratulations! you guess rignt number in `)
            setCount1(count + " attempts")
        }
    }



    function getValue(e) {
        setNumber(e.target.value)
    }
   return (

        <div className="container">
            <h1>Lets play the game</h1>
            <h2> Enter the number to guess</h2>
           <input onChange={getValue} placeholder="Enter the number" />
            <button onClick={handleEvent}>Match Number</button>
            <h1>  {ans} {count1}</h1>
            
            </div>
)
}
