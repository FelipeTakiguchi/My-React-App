import { useState } from "react"
import './style.css'

export default function Incrementer(){
    const [num, setNum] = useState(0);
    
    const Incremention = (event) => {
        setNum(num + 5);
    };
    const Decremention = (event) => {
        setNum(num - 5);
    };

    return (
        <div class='container'>
            <button onClick={Incremention}>+5</button>
            <p class='num-count'>{num}</p>
            <button onClick={Decremention}>-5</button>
        </div>
    )
}