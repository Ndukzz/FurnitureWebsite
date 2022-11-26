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
      <div>
        <button className='button white-button'>Login</button>
        <button className='button brown-button'>Sign Up</button>
      </div>
    </div>
  )
}

export default TopBar