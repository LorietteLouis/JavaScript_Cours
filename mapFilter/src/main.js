import movies from "./movie.json" assert { type: 'json' };

// a. Logger le premier element du tableau movies
console.log(movies[0])
// b. Logger l'annee du 4eme element du tableau movies
console.log(movies[3].year)
// c. Logger le titre du dernier element du tableau movies
console.log(movies[movies.length-1].title)
// d. Logger le titre du film qui a la meilleure note

movies.sort(function(a,b){
    return b.rate-a.rate;
});
console.log(movies[0].title)

// e. Logger le titre du film le plus ancien

movies.sort(function(a,b){
    return a.year - b.year;
});
console.log(movies[0].title)

// f. Logger tous les titres de film qui ont au moins 3 acteurs
// function getMovieWithMoreActor(arr) {
//     let result = []
//     arr.forEach((e) => {
//         if (e.actors.length >= 3) {
//             result.push(e.title)
//             console.log(e.title)
//         }
//     })

//     return result;
// }

const getMovieWithMoreActor = movies.filter((movie) => {
    return movie.actors.length >= 3
})
const filterMovieByTitles = getMovieWithMoreActor.map((currentElement) => {
    return currentElement.title
})
console.log(filterMovieByTitles)


// 1. Ecrire une fonction qui prend en parametre le tableau movies et qui retourne un nouveau tableau de tous les titres de films

// function getAllTitle(arr){
//     let titles =[]   
//     for (let i = 0 ; i < arr.length ; i++){
//         titles.push(arr[i].title)
//     }return titles
// }

let getAllTitle = movies.map(obj =>{
    return obj.title
})
console.log(getAllTitle)
// console.log(getAllTitle(movies))    
// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (movies), et qui retourne un nouveau tableau de titres de film de l'annee specifiee

// const getMovieByYear = (yearParam, arr) => {
//     let result = []

//     arr.forEach((el) => {
//         if(yearParam === el.year){
//             result.push(el.title)
//         }
//     })

//     return result
// }

// console.log(getMovieByYear(1999, movies))


const getMovieByYear = movies.filter(function(movies) {
    return movies.year == 1994

})

const filterMovieByYear = getMovieByYear.map((currentElement) => {
    return currentElement.title
})
console.log(filterMovieByYear);
// 3. Ecrire une fonction qui prend en parametre un realisateur et un tableau (movies), et qui retourne un nouveau tableau de tous les titres de films de ce realisateur

// const getMovieByRealisator = (real, arr) => {
//     let result = []

//     arr.forEach((el) => {
//         if(real === el.director){
//             result.push(el.title)
//         }
//     })

//     return result
// }

// console.log(getMovieByRealisator("Quentin Tarantino", movies))

const getMovieByRealisator = movies.filter(function(movies){
    return movies.director == "Quentin Tarantino"

})

const filterMoviesByDirector = getMovieByRealisator.map ((currentElement) => {
    return currentElement.title

})
console.log(filterMoviesByDirector)