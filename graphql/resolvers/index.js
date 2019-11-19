import { mergeResolvers } from 'merge-graphql-schemas';

import Response from './Response/';

const resolvers = [Response];

export default mergeResolvers(resolvers);
