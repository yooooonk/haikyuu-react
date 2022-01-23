const { GraphQLServer } = require('graphql-yoga');

// 1. graphQL 스키마를 정의한 것
const typeDefs = `
type Query {
  info: String!
}
`;

// 2. graphQL 스키마의 실제 구현. typeDefs = Query.info의 구조가 같다.
const resolvers = {
  Query: {
    info: () => `Hackernews Clone의 API입니다`
  }
};

// 3. 스키마와 리졸버를 함께 묶어서 graphql-yo의 GraphQLServer로 전달.
const server = new GraphQLServer({
  typeDefs,
  resolvers
});
server.start(() => console.log(`http://localhost:4000에서 서버 가동중`));
