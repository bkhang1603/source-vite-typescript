import { get, post, put, remove } from './apiCaller'

interface Movie {
  name: string
  image: string
  background: string
  logo: string
  video: string
  description: string
}

export const getAllMovie = (endpoint: string) => {
  return get(endpoint)
}

export const getMovieById = (endpoint: string, id: number) => {
  return get(`${endpoint}/${id}`)
}

export const postMovie = (endpoint: string, body: Movie) => {
  return post(endpoint, body)
}

export const putMovie = (endpoint: string, id: number, body: Movie) => {
  return put(`${endpoint}/${id}`, body)
}

export const deleteMovie = (endpoint: string, id: number) => {
  return remove(`${endpoint}/${id}`)
}
