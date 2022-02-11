export let movie = [
	{
		id:0,
		name:"Star Wars - The new one",
		score:1
	},
	{
		id:1,
		name:"Avengers",
		score:8
	},
	{
		id:2,
		name:"The Gotfather",
		score:99
	},
	{
		id:3,
		name:"Gone with wind",
		score:2
	}
]

export const getMovies = ()=>movie;

export const getMovie = (id)=>{
	return movie.filter(movie=>movie.id === id)[0]
}

export const deleteMovie = (id)=>{
	const cleanedMovies = movie.filter(movie=>movie.id===id)

	if(movie.length > cleanedMovies.length){
		movie = cleanedMovies
		return true;
	}else{
		return false;
	}
}