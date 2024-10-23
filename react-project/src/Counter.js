
import { useState } from "react";

function Counter(){
    let [count , setCount] = useState(0);

    // function incrementByOne(){
    //     setCount(count + 1);
    // }
    // function decrementByOne(){
    //     setCount(count - 1);
    // }
    // function incrementByTwo(){
    //     setCount(count + 2);
    // }
    // function decrementByTwo(){
    //     setCount(count - 2);
    // }
    // function reset(){
    //     setCount(0);
    // }

    // Now with the short way a single function can do all this 

    function updateCount(val){
        setCount(count + val);
    }

    return (
        <div className="button">
            <h1>{count}</h1>
            {/* <button onClick={() => setCount(count+1)}>+1</button> */}
            <button onClick={() => updateCount(+1)}  className = "buttons">+1</button>
            <button onClick={() => updateCount(-1)}  className = "buttons">-1</button>
            <button onClick={() => updateCount(+2)}  className = "buttons">+2</button>
            <button onClick={() => updateCount(-2)}  className = "buttons">-2</button>
            <button onClick={() => updateCount(-5)}  className = "buttons">-5</button>
            <button onClick={() => updateCount(+5)}  className = "buttons">+5</button>
            <button onClick={() => updateCount(-10)} className = "buttons">-10</button>
            <button onClick={() => updateCount(+10)} className = "buttons">+10</button>
            <button onClick={() => updateCount(-count)}  className = "buttons">Reset</button>
         
        </div>
    )
}

export default Counter;