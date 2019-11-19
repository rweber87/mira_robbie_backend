import { mergeTypes } from 'merge-graphql-schemas';

import Response from './Response/';

const typeDefs = [Response];

export default mergeTypes(typeDefs, { all: true });
