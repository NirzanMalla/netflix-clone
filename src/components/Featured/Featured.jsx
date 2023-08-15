import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './feature.scss'
const Featured = () => {
  return (
    <div className='featured'>
      <img 
      width='100%'
      src="https://images.alphacoders.com/128/1289451.jpg" alt="Poster"
      />
    <div className="info">
    {/* <img 
      src="https://w7.pngwing.com/pngs/387/687/png-transparent-logo-game-of-thrones-television-text-logo.png" alt="Poster"
      /> */}
      <span className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quaerat maiores necessitatibus aliquid nobis nisi! Nam ipsam quam eaque alias minima corrupti, eveniet nulla excepturi.
      </span>
      <div className="buttons">
        <button className="play">
            <PlayArrowIcon/>
            <span>
                Play
            </span>
        </button>
        <button className="more">
            <InfoOutlinedIcon/>
            <span>
                More
            </span>
        </button>
      </div>
      </div>
    </div>
  )
}

export default Featured
