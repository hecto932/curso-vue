import trae from 'trae'
import configService from './configService'

const platziMusicService = trae.create({
  baseUrl: configService.apiUrl
})

export default platziMusicService