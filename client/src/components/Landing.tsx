import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  const [name,setName] = useState("")

  return (
    <div>
      <h1>Landing page</h1>
      <input type="text" placeholder="Enter Username" onChange={(e)=>setName(e.target.value)}/>
      <Link to={`/room/?name=${name}`} > Join </Link>
    </div>
  )
}

export default Landing
