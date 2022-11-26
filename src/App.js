import React from 'react';

import Body from './components/Body';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Data from './components/Data.js'

function App() {

  return (
    <div> 
      <TopBar />
      <Navbar />
      <Body 
        provs={Data.provisions} 
        arrivals={Data.arrivals}
        prod={Data.products}
      />
    </div>
  )
}

export default App;