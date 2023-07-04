const API_DNS = 'http://localhost:8080/controle'

export const categories = [
    {
        name: "trending",
        title: "Em Alta",
        path: "/trending",
        isLarge: true,
    },
    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: "/netflixoriginals",
        isLarge: false,
    },
    {
        name: "topRated",
        title: "Populares",
        path: "/toprated",
        isLarge: false,
    },
    {
        name: "comedy",
        title: "Comédias",
        path: "/comedy",
        isLarge: false,
    },  
    {
        name: "romances",
        title: "Romances",
        path: "/romances",
        isLarge: false,
    },                
    {
        name: "documentaries",
        title: "Documentários",
        path: "/documentaries",
        isLarge: false,
    }
]

export const getMovies = async(path) => {
    try {
        let url = API_DNS + path
        const res = fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })

        return (await res).json()
        
    } catch(err) {
        console.log('error API: ', err);
    }
}

export const fazerLogin = async(user) => {
    try {
        let url = API_DNS + '/login'
        const res = fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })

        return (await res).json()
        
    } catch(err) {
        console.log('error login: ', err);
    }
}

export const fazerCadastro = async(user) => {
    try {
        let url = API_DNS + '/cadastro'
        const res = fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: user
        })

        return await res
        
    } catch(err) {
        console.log('error cadastro: ', err);
    }
}