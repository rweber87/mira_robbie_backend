import Response from '../../../models/Response';

export default {
  Mutation: {
    addResponse: (
      root,
      { first_name, last_name, response, writtenResponse }
    ) => {
      const newResponse = new Response({
        first_name,
        last_name,
        response,
        writtenResponse
      });

      return new Promise((resolve, reject) => {
        newResponse.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
