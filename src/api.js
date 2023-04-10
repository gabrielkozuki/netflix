const API_KEY = ''
const API_DNS = 'https://api.themoviedb.org/3/'

const categories = [
    {
        name: "trending",
        title: "Em alta",
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`
    },
    {
        name: "documentaries",
        title: "Documentários",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=99`
    }
]

const getMovies = (cat) => {
    let path_req = '';
    
    categories.forEach(el => {
        if (el.name === cat) {
            path_req = el.path
        }
    });

    return API_DNS + path_req
}

export default getMovies
