import React, { useEffect } from 'react'
const imageURL="https://image.tmdb.org/t/p/original"
// import axios from 'axios'
import {BiPlay,BiPlus} from "react-icons/all"

  const Card= (props)=> {
    return (
      <img className="card" src={props.img}/>
    )
  }










   const Row = (props) => {

    
    return (
      <div className='row'>
      <h3>{props.title}</h3>
     <div className='imageContainer'>
     {props.arr.map((item,index)=>{
      return <Card key={index} img={`${imageURL}${item.poster_path}`}/>  
     })}
      </div>
      </div>
    )
   }
   










   function Body() {
    

    const [MoviesData,setMoviesData]=React.useState({
      Trending:[], NowPlaying:[], TopRated:[]
    })


    React.useEffect(()=>{
// const fetchUpcoming = async () => {
//   const {data:{results} }= await axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=fb227a5107489598c93dace892416f64")
//   setMoviesData((prev)=>{
//        return {
//              ...prev,
//              Trending:results
//        }
       
// })}
// fetchUpcoming()
// console.log(MoviesData.Trending[1])

      async function getTrending(){
       const response = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=fb227a5107489598c93dace892416f64")
        const data= await response.json()
        setMoviesData((prev)=>{
         return {
               ...prev,
               Trending:data.results
         }
        }
        )
      }

      async function getNowPlaying(){
        const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=fb227a5107489598c93dace892416f64&language=en-US&page=1")
         const data= await response.json()
         setMoviesData((prev)=>{
          return {
                ...prev,
                NowPlaying:data.results
          }
         }
         )
       }

       async function getTopRated(){
        const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=fb227a5107489598c93dace892416f64&language=en-US&page=1")
         const data= await response.json()
         setMoviesData((prev)=>{
          return {
                ...prev,
                TopRated:data.results
          }
         }
         )
       }


      getTrending()
      getNowPlaying()
      getTopRated()     
      
    }
    ,[])
    
    
    
    // const backImg=`${imageURL}/${MoviesData.NowPlaying[1]}`
    // const backImg=`${imageURL}${MoviesData.TopRated[0].poster_path}`
    // console.log(backImg)
    // const backImg=`${imageURL}/${MoviesData.Trending[2].poster_path}`

    
    return (
    <>
    <div className='banner' style={{
      backgroundImage: MoviesData.TopRated[0] ? `url(${`${imageURL}/${MoviesData.TopRated[0].poster_path}`})`: "black" }} >
      
      { MoviesData.TopRated[0] && <h1>{MoviesData.TopRated[0].title}</h1>}    
      { MoviesData.TopRated[0] && <p>{MoviesData.TopRated[0].overview}</p>}

      <div className='buttons'>
      <button> <BiPlay/>Play</button>
      <button>My List <BiPlus/> </button>
      </div>
      </div>
      

      <Row  title={"Top Rated"} arr={MoviesData.TopRated}/>
      <Row  title={"Popular on Netflix"} arr={MoviesData.Trending}/>
      <Row  title={"Now Playing"} arr={MoviesData.NowPlaying}/>
      

    </>
  )
}

export default Body