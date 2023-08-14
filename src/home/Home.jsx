import Navbar from '../components/Navbar/Navbar'
import './home.scss'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <img 
      width='100%'
      src="https://www.hollywoodreporter.com/wp-content/uploads/2022/02/OPPENHEIMER_v02-H-2022.jpg?w=1296" alt="Poster"
      />
    </div>
  )
}

export default Home
