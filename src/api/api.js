import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export const getPopularMovies = (pageNumber) => {
    return instance.get(`/movie/popular?api_key=dcbc538ac3bc9a8a7fedd4b3a3f98eef&language=en-US&page=${pageNumber}`)
}

export const getInformationAboutFilm = (id) => {
    return instance.get(`/movie/${id}?api_key=dcbc538ac3bc9a8a7fedd4b3a3f98eef&language&language=en-US`)
}