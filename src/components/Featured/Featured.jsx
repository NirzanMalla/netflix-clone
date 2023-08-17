import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './feature.scss'
const Featured = () => {
  return (
    <div className='featured'>
      <img 
      width='100%'
      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNh4rDMFFvBFxzjNq6yQ9lRIqJH-mEn3yXERyZ88VeIE-KC19AK8xta3snVkiPAWP696uBzYxI3jW8l42tHb2BQF6HTSFJX-CbWjwOSaN-PUiXQzxx17NcxMteECV6LEWqhAnGjYsXNkJGf6zlwKWnitvZQO7lW25nHAA_9n3pbEce2ANW04eNijF0bw/s1600/WEDNESDAY-ADDAMS-1022023.png" alt="Poster"
      />
    <div className="info">
    <img 
      src="https://logos-world.net/wp-content/uploads/2022/12/Logo-Wednesday.png" alt="Poster"
      />
      <span className="desc">
      Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.
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
