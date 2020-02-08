export default `
  type Response {
    email: String!
    first_name: String!
    last_name: String!
    response: String!
    updated_date: String!
  }
  type Query {
    response(id: String!): Response
    responses: [Response]
  }
  type Mutation {
    addResponse(email: String!, first_name: String!, last_name: String!, response: String!, writtenResponse: String ): Response
  }
`;
