import platziMusicService from './platzi-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  console.log(q)

  return platziMusicService.get('/search', { params: { q, type } })
    .then(res => res.data)
    .catch(err => err)
}

trackService.getById = function (id) {
  return platziMusicService.get(`tracks/${id}`)
    .then(res => res.data)
}

export default trackService
