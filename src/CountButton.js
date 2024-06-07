import { useState, useEffect } from "react";
import  "./index.css"


const CountButton = () => {
    const[count,setCount]=useState(0);


    useEffect(() => {
        console.log("component Mounted ");
    
    //   return () => {
    //     console.log("cleaning up function is running...")
    //   }
    }, [])



    // useEffect(() => {
    //     console.log("component mounted")},[])
    
    // useEffect(() => {
    //     console.log("component updating")},[count]);
    
    // useEffect(() => {
    //     console.log("1st type of useEffect, will run code on mount atleast once" + count + " times");
    //    },[]);

    // useEffect(() => {
    //    console.log("2nd type of useEffect, when dependency is passes in the array")
    
    // }, [count]);

    // useEffect(()=>{
    //     console.log("the count is:",count);
    //     return()=>{
    //         console.log("3rd type of useEffect, when component unmounts or cleaned up will destroy preveious data and generate new");
    //     }
    // },[count]);
    

    const increment=()=>{
        setCount(count+1);
        // console.log(count);
    };

    const decrement=()=>{
        if(count<=0){
            alert("Count Cannot be Negative!")
            return;
            
        } else{
        setCount(count-1);
        // console.log(count);
        
        }
    };

  return (
    <div>
        <p>Count:{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        
    </div>
  )
}

export default CountButton;

