import React, { useState } from 'react'
import './Home.css'
import Videos from './Videos'

const Home = () => {

  const categoryData = ["All", "Gaming", "Javascript", "Python", "Music", "Mixes", "Lives", "Comedy", "Programming", "Lofi Songs", "Najot Ta'lim", "Marvel", "Movies", "T-Series"]

  const [category] = useState("All")
  

  return (
    <>
      <div className="homeContainer container" id='homeContainer'>
        <div className="categoryContainer">
          {categoryData.map((tab) => {
            return <h3 className={`categoryTab ${category === tab && 'active'}`} key={tab}>{tab}</h3>
          })}
        </div>
        <div className="videoContainer">
          <Videos/>
        </div>
      </div>
    </>
  )
}

export default Home