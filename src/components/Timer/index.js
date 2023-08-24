import { useState, useRef, useEffect } from "react"
import './style.css'

export default function Timer() {
    const [num, setNum] = useState(0);
    const [show, setShow] = useState(false);

    useEffect(() =>
    {
        const changeTime = setInterval(() => {
            setNum(num + 1);
            document.title = 'Actual Time: ' + (num + 1);
            setShow(true);
        }, 5000);

        return () => {
            clearInterval(changeTime);
        }
    }, [])

    useEffect(() => {
        const interval = setTimeout(() => {
            setShow(false);
        }, 3000);

        return () => clearTimeout(interval);
    }, [show]);

    return (
        <>
            <div class='container'>
                <p class='num-count'>{num}</p>
                {show &&
                    <div class='notify'>Title page changed!</div>
                }
            </div>
        </>
    )
}