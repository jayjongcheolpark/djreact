import React from 'react'
import { Link } from 'react-router-dom'

const container = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  background: '#121212',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const bg = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  backgroundSize: 'cover',
  objectFit: 'cover',
  objectPosition: 'center',
  mixBlendMode: 'overlay',
  backgroundImage: 'url(http://i.giphy.com/l117HrgEinjIA.gif)',
}

const code = {
  fontFamily: 'Alfa Slab One',
  fontSize: '144px',
  height: '100vh',
  color: 'white',
  width: '100%',
  backgroundSize: 'cover',
  mixBlendMode: 'screen',
}

const GameOver = () => (
  <div>
    <div className="text-center" style={container}>
      <div style={bg} />
      <div className="mt-5" style={code}>
        Game Over<br />
        <Link className="btn btn-lg  text-lg btn-outline-light" to="/">
          Retry
        </Link>
      </div>
    </div>
  </div>
)

export default GameOver
