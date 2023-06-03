import React from 'react'
import './SearchPage.css'
import { useStateValue } from './StateProvider'
import useGoogleSearch from './useGoogleSearch'
import {Link} from "react-router-dom"
import Search from './Search'
import {  DescriptionOutlined, ImageOutlined, LocalOfferOutlined, MoreVertOutlined,  RoomOutlined, Search as SearchIcon } from '@mui/icons-material'



function SearchPage() {
    const[{term},dispatch]=useStateValue();


    // const data=Response;


    const {data}=useGoogleSearch(term)
    console.log(data)
  return (
    <div className='searchPage'>
        <div className="searchPage_header">
         <Link to="/">
          <img  className='searchPage_logo' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />

         </Link>


         <div className="searchPage_headerBody">
          <Search hideButtons/>
          <div className="searchPage_options">
            <div className="searchPage_optionsLeft">
              <div className="searchPage_option">
                <SearchIcon/>
                <Link to='/all'>All</Link>
              </div>
              <div className="searchPage_option">
                <DescriptionOutlined/>
                <Link to="/news">News</Link>

              </div>
              <div className="searchPage_option">
                <ImageOutlined/>
                <Link to="\images">Images</Link>

              </div>
              <div className="searchPage_option">
                <LocalOfferOutlined/>
                <Link to="/shopping">shopping</Link>

              </div>
              <div className="searchPage_option">
                <RoomOutlined/>
                <Link to='/maps'>maps</Link>

              </div>
              <div className="searchPage_option">
                <MoreVertOutlined/>
                <Link to='/more'>more</Link>

              </div>

            </div>
            <div className="searchPage_optionsRight">

            </div>
            <div className="searchPage_option">
              <Link to='/settings'>Settings</Link>

            </div>
            <div className="searchPage_option">
              <Link to='/tools'>Tools</Link>

            </div>
          </div>

         </div>
        </div>
        {term &&(
          
          
          <div className="searchPage_results">
            <p className="searchpage_resultCount">
              About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
            </p>

           {data?.items.map(item=>(
            <div className="searchPage_result">
              <a className='searchPage_resultLink' href={item.link}>
                {item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0].src && (
                  <img className='searchPage_resultImage' src={item.pagemap?.cse_image?.length>0 && item.pagemap?. cse_image[0]?.src} alt="" />
                )}
              {item.displayLink}
              </a>
             
              <a className='searchPage_resultTitle' href="{item.link}">
                <h2>{item.title}</h2>
              </a>
              <p className='searchPage_resultSnippet'>{item.snippet}</p>

            </div>
           ))}
        </div>
          )}
    </div>
        


        
  )
}

export default SearchPage





