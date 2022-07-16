class MainApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  handleResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка ${res.status}`)
  }

  registration = async (name, password, email) => {
    try {
      const req = await fetch(`${this.baseUrl}/signup`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({
          name,
          password,
          email
        })
      })
      return await req.json();
    } catch (error) {
      console.log(error)
    }
  }

  authorization = async (password, email) => {
    try {
      const req = await fetch(`${this.baseUrl}/signin`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({
          password,
          email
        })
      })
      return await req.json();
    } catch (error) {
      console.log(error);
    }
  }

  setUserInfo = async (name, email, jwt) => {
    try {
      const req = await fetch(`${this.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: {
          "Authorization" : `Bearer ${jwt}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email
        })
      })
      return await req.json();
    } catch (error) {
      console.log(error);
    }
  }

  getUserInfo(jwt) {
    return fetch(`${this.baseUrl}/users/me`, {
    headers: {
      "Authorization" : `Bearer ${jwt}`,
      'Content-Type': 'application/json'
    }
    })
    .then((res) => this.handleResponse(res))
  }

  likeMovie = async (data, jwt) => {
    try {
      const req = await fetch(`${this.baseUrl}/movies`, {
        method: 'POST',
        headers: {
          "Authorization" : `Bearer ${jwt}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          country: data.country,
          director: data.director,
          duration: data.duration,
          year: data.year,
          description: data.description,
          image: data.image,
          trailerLink: data.trailerLink,
          nameRU: data.nameRU,
          nameEN: data.nameEN,
          thumbnail: data.thumbnail,
          movieId: data.movieId,
        })
      })
      return await req.json();
    } catch (error) {
      console.log(error);
    }
  }

  deleteLikeToMovie = (movieId, jwt) => {
    return fetch(`${this.baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        "Authorization" : `Bearer ${jwt}`,
        'Content-Type': 'application/json'
      }
    })
  }

  getLikedMovies = async (jwt) => {
    try {
      const req = await fetch(`${this.baseUrl}/movies`, {
        headers: {
          "Authorization" : `Bearer ${jwt}`,
          'Content-Type': 'application/json'
        }
        })
      return await req.json();
    } catch (error) {
      console.log(error);
    }
  }
}

const mainApi = new MainApi('https://api.diplom-andmed.nomoredomains.xyz');

export default mainApi;