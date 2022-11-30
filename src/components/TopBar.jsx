import React from 'react'
import "./Topbar.css"

const TopBar = () => {
   
  // const [searchItem, setSearchItem] = useState("")

  return (
    <div className="topbar"> 
      <div>Logo</div>
      <input 
        type="text"
        // value={searchItem}
        placeholder="  Search For Products"
        />
      <div className='signUp'>
        <button className='but button white-button'>Login</button>
        <button className='but button brown-button'>Sign Up</button>
      </div>
    </div>
  )
}

export default TopBar