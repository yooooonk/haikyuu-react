export const people = [
	{
		id:1,
	name:'Nicolas',
	age:18,
	gender:'female'
},
	{id:2,
	name:'Nicolas',
	age:18,
	gender:'female'
}]

export const getbyId = id => {
	return people.filter((person)=> id===person.id)[0]
}
