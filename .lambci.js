module.exports = {
  s3PublicSecretNames: false,
  build: false,
  branches: {
    master: true,
    'tags/v[0-9]+(\.[0-9]+)*/': true
  },
  pullRequests: {
    ignoreClosed: false,
  }
}