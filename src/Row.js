
import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './axios'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

function Row({title , fetchUrl , isLargeRow= false}) {
    const [movies , setMovies] = useState([])
    const [trailerUrl , setTrailerUrl] = useState("")

     const BASE_URl = "https://image.tmdb.org/t/p/w500/";
    useEffect(()=>{
   async function fetchData(){
       const request = await axios.get(fetchUrl)
       setMovies(request.data.results)
       return request
   }
     fetchData()
    }, [fetchUrl])
  

    const opts ={
      height :'390' ,
      width : '100%' ,
      playerVars :{
         autoplay : 1,
      },
    };

    const handleClick = (movie)=>{
      console.log(movie)
      if(trailerUrl){
        setTrailerUrl("")
      }
      else{
            movieTrailer(null ,{ tmdbId: movie.id })
          .then((url)=>{   
         const urlParams=new URLSearchParams(new URL(url).search);
         setTrailerUrl(urlParams.get("v"));
          })
         .catch((error)=> console.log(error));
    }

    }

  return (
    <div className='row'>
    <h2>{title}</h2>

   <div className="row-posters">
    {movies.map((movie)=>{
          return (
           ((isLargeRow && movie.poster_path) ||
          (!isLargeRow && movie.backdrop_path)) && (
            
        <img  className={`row-poster ${isLargeRow && "row-posterLarge"}` }
            key={movie.id}
            onClick={()=>handleClick(movie)}
              src={`${BASE_URl}${  
               isLargeRow ? movie.poster_path : movie.backdrop_path
              }`} 
              alt={movie.name} />
        )
          )
    })}
       </div>
     {trailerUrl &&  <YouTube  videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
