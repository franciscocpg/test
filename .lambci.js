module.exports = {
  s3PublicSecretNames: false,
  build: false,
  branches: {
    master: false,
    'tags/v[0-9]+(\.[0-9]+)*/': true
  }
}