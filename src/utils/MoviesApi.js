const url = 'https://api.nomoreparties.co/beatfilm-movies';

export const getMoviesDB = async () => {
  const req = await fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return await req.json();
}

export const putMoviesToLocalStorage = async () => {
  try {
    const movieDb = await getMoviesDB();
    localStorage.setItem('movieDb', JSON.stringify(movieDb));
  } catch (err) {
    console.log('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
  }
}