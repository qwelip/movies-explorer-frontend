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
  }

  authorization = async (password, email) => {
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
  }

  setUserInfo = ({name, about, jwt}) => {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        "Authorization" : `Bearer ${jwt}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        about
      })
    })
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