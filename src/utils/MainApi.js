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

  registration(name, password, email) {
    return fetch(`${this.baseUrl}/signup`, {
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
    .then((res) => this.handleResponse(res))
  }

  authorization(password, email) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        password,
        email
      })
    })
    .then((res) => this.handleResponse(res))
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
}

const mainApi = new MainApi('https://api.diplom-andmed.nomoredomains.xyz');

export default mainApi;