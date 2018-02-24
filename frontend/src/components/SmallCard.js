import React from 'react'
import Tilt from 'react-tilt'
import './SmallCard.css'

const SmallCard = () => (
  <div className="ma4 mt0">
    <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 150, width: 150 }}>
      <div className="Tilt-inner pa3">
        <h2>Insert Text Here </h2>
      </div>
    </Tilt>
  </div>
)

export default SmallCard
