import platziMusicService from './platziMusicService'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  return platziMusicService.get('/search', {
    params: { q, type }
  })
  .then(res => res.data)
  .catch(err => err)
}