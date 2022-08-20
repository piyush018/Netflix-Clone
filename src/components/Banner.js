import React, {useEffect , useState}from 'react'
import '../styles/Banner.css';
import axios from 'axios';
import Requests from '../ApiRequest/Request';

function Banner() {

 const [movie , setMovie] = useState([])

    useEffect(()=>{
        async function fetchData(){
     const request = await axios.get(Requests.fetchNetflixOriginals)
         setMovie(
             request.data.results[
                 Math.floor(Math.random() *   request.data.results.length -1)
             ]
         );
         return request;
        }
        fetchData()
        },[]);
  function truncate(str , n){
    return str?.length > n ? str.substr(0,n-1) + "..." : str;
   }

  return (
    <>
  <header className='banner'
  style={{
    backgroundSize : "cover",
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundPosition: "center center",
  }}
   >
    <div className='banner-content'>
      <h1 className='banner-title'> 
      {movie?.title || movie?.name || movie?.original_name}
      </h1>
       <div className='banner-buuton'>
         <button className='banner-button'> play </button>
           <button className="banner-button">My List </button>
       </div>
         <h1 className="banner-desc">{truncate(movie?.overview ,150)} </h1>
     </div>
     <div className="banner-fadeBottom" />
   </header>
   </>
  )
}

export default Banner