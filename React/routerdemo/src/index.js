import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import './style.css';
import Home from './Home';
import {About, Contact} from './Pages';

function Layout(){
  return(
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-2 me-1 border border-primary'>
            LOGO
          </div>
          <div className='col border border-danger'>
            <ul class="nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">Contact</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/students">Students</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-3 border border-warning'>
            SIDEBAR
          </div>
          <div className='col border border-info'>
          <Outlet/>
          </div>
        </div>
        <div className='row'>
          <div className='col text-center border border-primary'>
          FOOTER
          </div>
        </div>
      </div>
    </>
  );
}



function Students(){
  
  const [imageWidth, setImageWidth] = useState(200);

  const [imageLeft, setImageLeft] = useState(0);

  const [index, setIndex] = useState(0);

  let imagePath = [
    "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg",
    "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/5---29-04-2023-11-00-29.jpg",
    "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/6---28-04-2023-02-06-07.jpg"
  ]
  
  let sty = {
    position:'relative',
    left:imageLeft
  }

  return(
    <>
      <button onClick={()=>{
        setImageWidth(imageWidth+10);
      }}>Increment</button>

      <button onClick={()=>{
        setImageWidth(imageWidth-10);
      }}>Decrement</button>

        <button onClick={()=>{
          setIndex((index+1)%3);
        }}>Next</button>
      
        <button onClick={()=>{
          if(index==0){
            setIndex(2);
          }
          else{
            setIndex(index-1);
          }
          
        }}>Prev</button>
      
      <br/>
      <img src={imagePath[index]} style={sty} width={imageWidth}/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/students" element={<Students />} />
        </Route>
      </Routes>
    </BrowserRouter>  
  </>
);