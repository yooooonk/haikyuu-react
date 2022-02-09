import {getbyId, people} from './db'

const resolvers = {
	Query:{
		people:()=>people,
		person:(_, args)=> {
			console.log(args) // {id:1}
			return getbyId(args.id)
		}
	}
}
export default resolvers;

