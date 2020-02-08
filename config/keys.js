const aws = require('aws-sdk');

const DB_URL = new aws.S3({
  uri: process.env.uri
});

module.exports = {
  mongoURI: DB_URL.config.uri
};
