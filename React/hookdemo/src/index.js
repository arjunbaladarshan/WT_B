import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

function Home(){
  
  let [count, setCount] = useState(15);
  
  let apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/laptops";
  

  return(<>
    <h1>{ count }</h1>
    <button onClick={()=>{
      setCount();
      console.log("Btn clicked = ", count)
    }}>Click</button>
  </>);
}



function Forms(){
  
  const [data, setData] = useState({});

  return(
    <>
      <div style={{width:"45%",float:"left",border:"2px solid red",padding:"10px"}}>
        <form>
          <input 
            type='text' 
            placeholder='Enter Name' 
            onChange={(e)=>{
              setData({...data, name:e.target.value});
            }} />        

            <input
              type="password"
              placeholder='Enter Password'
              onChange={(e)=>{
                setData({...data,password:e.target.value})
              }}
            />

          <input
              type="number"
              placeholder='Enter age'
              onChange={(e)=>{
                setData({...data,age:e.target.value})
              }}
            />
            <input type='submit' />
          </form>
      </div>
      <div style={{width:"45%",float:"left",border:"2px dotted blue",padding:"10px"}}>
        <h1>Name = {data.name}</h1>
        <h1>Password = {data.password}</h1>
        <h1>Age = {data.age}</h1>
      </div>
    </>
  );
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Forms />);
