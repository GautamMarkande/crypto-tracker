import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import '../Search/Search.css'
function Search({search,setsearch}) {
    function onSearch(e){
        setsearch(e.target.value);
      }
  return (
    <div className='SerarchContainer'>
      <SearchRoundedIcon className='searchIcon'/>
      <input type="text" placeholder='Search' value={search} className='inputBoxSearch' 
      onChange={(e)=>onSearch(e)}
      />
    </div>
  )
}

export default Search
