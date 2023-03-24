import Button from "./Button";
import styles from "./UseEffect.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => {
    setCounter((prev) => prev + 1)
  }
  const onChange = (event) => {
    setKeyword(event.target.value)
  }

  console.log("I run all the time");

  // const iRunOnlyOnce = () => {
  //   console.log(iRunOnlyOnce)
  // }
  
  // useEffect : 처음 한번만 호출
  useEffect(()=>{
    console.log("I run only once")
    }, []
  );

  useEffect(()=>{
      if(keyword !== "" && keyword.length > 5){
        console.log("I run when 'keyword' changes. \n search for ", keyword)
      }
    }, [keyword]
  );
  // keyword에 변화가 일어났을 때만 실행
  
  useEffect(()=>{
      console.log("I run when 'counter' changes.", counter)
    }, [counter]
  );

  useEffect(()=>{
      console.log("I run when 'keyword' & 'counter' changes.", keyword, counter)
    }, [keyword, counter]
  );
  
  return (
    <div>
      <input type="text" value={keyword} onChange={onChange} placeholder="Search here" />
      <br />
      <br />

      <div>{counter}</div>
      <button onClick={onClick}>Click Me</button>

      <br />
      <br />
      <h1 className={styles.title}>Hello!</h1>
      <Button text={"Continue"} />
      <Button text={"Exit"} />
    </div>
  );  
}

export default App;
