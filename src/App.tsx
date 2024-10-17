import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home'
import './App.css'
import BasicExample from './Components/Navbar/Nav';
import Body from './Components/Body/Body';



const App = () => {
  return (
    <div className='Z'>
      <div style={{position:"sticky"}}><BasicExample/></div>
      <div style={{justifyContent:"center",backgroundAttachment:"fixed",marginTop:"-10vh",marginLeft:"auto",marginRight:"auto"}} className='Y'><Home/></div>
      <div style={{position:"absolute",paddingTop:"30vh",backgroundColor:"transparent",background:"inherit"}}><Body/></div>
    </div>
  )
}


export default App;
