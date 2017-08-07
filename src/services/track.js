import platziMusicService from './platzi-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  console.log(q)

  return platziMusicService.get('/search', { params: { q, type } })
    .then(res => res.data)
    .catch(err => err)
}

export default trackService
