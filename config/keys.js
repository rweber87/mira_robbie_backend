const aws = require('aws-sdk');

const envConfirmCode = new aws.S3({
  uri: process.env.uri
});

module.exports = {
  mongoURI: envConfirmCode.config.uri
};
