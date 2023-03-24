import { useEffect, useState } from "react";

// clean-up function(추가적인 정리: 메모리 누수 방지)
function Hello(){
    // const effectFn = ()=>{
    //     console.log("created :)")
    //     return destroyedFn;
    // }
    // const destroyedFn = ()=>{
    //     console.log("destroyed :(")
    // }
    
    // useEffect(effectFn, []);

    useEffect(()=>{
        console.log("created")
        return ()=>{ console.log("destroyed") }
    }, [])
    // 뒤에 [ dependency ]에 아무것도 없다면 첫 렌더링시에 실행되고, 
    // return은 컴포넌트 unmount시(destroy시) 실행된다.

    return (
        <h1>Hello</h1>
    );
}

function App2(){
    const [showing, setShowing] = useState(false);
    
    const onClick = ()=>{
        setShowing((prev)=>!prev)
    }
    
    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}

export default App2;