import React,{useState} from 'react';

function Counter(props) {
    const [counterValue,setCounterValue] = useState(0)
    return (
        <div>
            <p>{counterValue}</p>
            <button onClick={()=>{
                console.log('Function called')
                setCounterValue(counterValue+1)
            }}>Increment</button>
        </div>
    );
}

export default Counter;