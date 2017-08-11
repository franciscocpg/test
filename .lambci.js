module.exports = {
  s3PublicSecretNames: false,
  build: false,
  branches: {
    master: false,
    '/v[0-9]+(\.[0-9]+)*/': true
  }
}