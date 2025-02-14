let axios = require('axios')


// const movies = [
//     {    director : "James Gunn",
//     duration:"2h 16min",
//     genre : ['Action', 'Adventure', 'Comedy'],
//     poster :"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
//     rate : 7.7,
//     title:"Guardians of the Galaxy Vol. 2",
//     year: 2017,
//     },
//     {    director : "James Gunn",
//         duration:"2h 16min",
//         genre : ['Action', 'Adventure', 'Comedy'],
//         poster :"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
//         rate : 7.7,
//         title:"Guardians of the Galaxy Vol. 2",
//         year: 2017,
//         },

//         {  
//               director : "James Gunn",
//             duration:"2h 16min",
//             genre : ['Action', 'Adventure', 'Comedy'],
//             poster :"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
//             rate : 7.7,
//             title:"Guardians of the Galaxy Vol. 2",
//             year: 2017,
//             }, 
//     ];
  

module.exports = {
    getMovies : async () => {
       let fetchMovies = await axios.get('https://students-api.up.railway.app/movies');

       return fetchMovies.data;
    }

}
    
    
