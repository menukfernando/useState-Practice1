import { useState } from "react";

export default function Button(){

    const [count, setCount] = useState(0)

    function increment(){
        setCount(prevCount => prevCount + 1)
    }

    return(
        <>
            <center>
                <button id="btn" type="button" onClick={increment}>
                    Increment {count}
                </button>
            </center>         
        </>
    )
}