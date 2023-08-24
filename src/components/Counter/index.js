import { useState, useRef } from "react"
import './style.css'

export default function Counter() {
    const [name, setName] = useState('');
    const refInput = useRef(null);

    function handleName() {
        if (name.length < 3)
            refInput.current.focus();
    }

    return (
        <>
            <form>
                <input
                    ref={refInput}
                    onBlur={handleName}
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </form>
        </>
    );
}
    // const [num, setNum] = useState(0);

    // const ClickFunction = (event) => {
    //     setNum(num + 1);
    // };

    // return (
    //     <div class='container'>
    //         <p class='num-count'>{num}</p>
    //         <button onClick={ClickFunction}>Click me</button>
    //     </div>
    // )