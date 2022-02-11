import {getbyId, getMovie, getMovies, people} from './db'

const resolvers = {
	Query:{
		movies:()=> getMovies(),
		movie:(_, args)=> {
			return getMovie(args.id)
		}
	}
}
export default resolvers;

