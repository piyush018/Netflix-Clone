import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import '../styles/Homescreen.css'
import Request from '../ApiRequest/Request'
import Row from './Row'


function Homescreen() {
  return (
      <div className='homeScreen'>
  < Navbar />
   <Banner />
  
   
 <Row title="NETFLIX_ORIGINALS"  fetchUrl={Request.fetchNetflixOriginals} 
   isLargeRow/>
   <Row title="Top Rated"  fetchUrl={Request.fetchTopRated} />
   <Row title="Trending Row"  fetchUrl={Request.fetchTrending} />
   <Row title="Action Movies"  fetchUrl={Request.fetchActionMovies} />
   <Row title="Comedy Movies"  fetchUrl={Request.fetchComedyMovies} />
   <Row title="Documentaries"  fetchUrl={Request.fetchDocumentaries} />
   <Row title="Horror Movies"  fetchUrl={Request.fetchHorrorMovies} />


  {/* Row*/}
  </div>
  )
}

export default Homescreen