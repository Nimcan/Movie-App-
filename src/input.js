import { useState, useEffect } from "react";
import Content from "./content";


function Input() {
  const [search, setSearch] = useState();
  const [movie, setMovie] = useState([]);
  console.log(movie)

  // function searching() {
  //   fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
  //     .then((response) => response.json())
  //     .then(
  //       (data) => {
  //         console.log(data);
  //         // setMovie(data)
  //       },
  //       []
  //     );
  // };

// useEffect(()=>{
//   fetch(`https://api.tvmaze.com/search/shows?q=${search}`).
//   then((res)=> res.json()).then((data)=> {
//     const filter = (data).filter((val)=>{
//        if (search == ""){
//       return data
//     } else if(data.show.name && data.show.image.toLowerCase().includes(search.toLowerCase())){
//       return setMovie(data)
//     }

//     })

   

//   }) 
// },[search])

useEffect(()=> {
  fetch(`https://api.tvmaze.com/search/shows?q=${search}`).
  then((res)=> res.json()).then((data)=> setMovie(data))
},[search])
   

  return (
    <>
    <div className="searching">
      <input
        type="text"
        className="input"
        placeholder="Your Movie"
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* <button onClick={(e)=> searching}>search</button> */}
    </div>
    {search !== null || undefined  ? (
    <main className="main">
    {movie.map((film, key)=>
  <div key={key} >
    
    {film.show.image !== null || undefined ? (
      <img src={film.show.image.original} className="movie-image" alt="no photo"/> 
    ): (
      <img src={film.show.image} className="movie-image" alt="no photo"/>)
    }

    <h2 className="movieName">{film.show.name}</h2>
    <p className="Description"></p>
    <a className="MovieLink" href=""></a>
  </div>
   )} 

</main>
) 
 : (<div> "Search is not found"</div>)}  
</>
  );
}

export default Input;
