const aws = require('aws-sdk');

const envConfirmCode = new aws.S3({
  uri: process.env.URI
});

module.exports = {
  mongoURI: envConfirmCode.config.uri
};
