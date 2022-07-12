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
  const moviwDb = await getMoviesDB();
  localStorage.setItem('moviwDb', JSON.stringify(moviwDb));
}