import { useState, useEffect } from "react"
import './style.css'

export default function Calculator(){
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);
    const [op, setOp] = useState('');

    useEffect(() => {
        switch(op){
            case '+':
                setResult(num1+num2);
                break;
            case '-':
                setResult(num1-num2);
                break;
            case '*':
                setResult(num1*num2);
                break;
            case '/':
                setResult(num1/num2);
                break;
        }    
    }, [num1, num2, op])

    return (
        <div class='container'>
            <div class='align-inputs'>
                <div class='input-value'>
                    <p class='input-text'>First Value</p>
                    <input class='input' type='number' value={num1} onChange={(e) => setNum1(Number(e.target.value))}></input>
                </div>
                <div class='input-value'>
                    <p class='input-text'>Second Value</p>
                    <input class='input' type='number' value={num2} onChange={(e) => setNum2(Number(e.target.value))}></input>
                </div>
            </div>
            <div class='options'>
                <button onClick={() => setOp('+')}>+</button>
                <button onClick={() => setOp('-')}>-</button>
                <button onClick={() => setOp('*')}>x</button>
                <button onClick={() => setOp('/')}>/</button>
            </div>
            <p class='result'>{result}</p>
        </div>
    )
}