import express from 'express';
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import schema from './graphql/';
import config from './config/keys';

const app = express();
const PORT = process.env.PORT || '4000';
const db = config.mongoURI;

mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(cors());

app.use(
  '/graphql',
  bodyParser.json(),
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
