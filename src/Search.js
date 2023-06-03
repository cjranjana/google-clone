import React, { useState } from 'react'
import './Search.css'
import { Search as SearchIcon } from "@mui/icons-material"
import { Mic as MicIcon } from '@mui/icons-material'
import { Button } from '@mui/material'
// import { useHistory as history } from 'react-router-dom/cjs/react-router-dom.min'
// import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import {useHistory} from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Search({hideButtons=false}) {
  const[{term},dispatch]=useStateValue();
  const[input,setInput]=useState('')
  const history=useHistory();

  const search = (e) =>{
    e.preventDefault();

    console.log('you hit the search button >>',input)
    dispatch({
      type:actionTypes.SET_SEARCH_TERM,
      term:input
    })
    history.push('/search')
  }

  console.log(' hideButtons prop:', hideButtons);
  return (

    <form className="search">
        <div className="search_input">
            <SearchIcon className='search_inputIcon'/>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <MicIcon></MicIcon>
        </div>

        {!hideButtons ? ( 

          
          <div className="search_buttons">
        
        <Button type='submit' onClick={search}
         variant='outlined'>
          Google Search
          </Button>
        <Button variant='outlined'>Feeling Lucky</Button>

        </div>
        ):
        (
          <div className="search_buttons">
        
          <Button className='search_buttonsHidden' type='submit' onClick={search} variant='outlined'>Google Search</Button>
          <Button className='search_buttonsHidden' variant='outlined'>Feeling Lucky</Button>

          </div>
          )}
        
        </form>

)
}

       

        
        

export default Search
