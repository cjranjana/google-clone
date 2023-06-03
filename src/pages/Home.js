import React from 'react' 
import { Link } from 'react-router-dom'
import { Apps } from '@mui/icons-material';
import Search from '../Search';
import { Avatar } from '@mui/material'
import './Home.css'


 
function Home(){
  return (
    <div>
      {/* <h1>This is Home Page</h1> */}
      <div className="home_header">
            <div className="home_headerLeft">

                <Link to='about'>About</Link>
                <Link to='store'>Store</Link>


            </div>
            <div className="home_headerRight">

            <Link to='gmail'>Gmail</Link>
            <Link to='images'>Images</Link>
            <Apps></Apps>
            <Avatar></Avatar>


            </div>
      </div>
 
      <div className="home_body">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
        <div className="home_inputContainer">
          <Search />
        </div>
         
      </div>
    </div>
  )
  }

export default Home
