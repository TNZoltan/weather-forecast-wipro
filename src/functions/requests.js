import axios from 'axios'

const openWeatherMapKey = '60716febc7f72a7e54962306d9688eda'

const URL_FORECAST = '//api.openweathermap.org/data/2.5/forecast'

export const fetchForecastByCity = (city = 'Dublin') => {
  return axios.get(`${URL_FORECAST}?q=${city}&units=metric&appid=${openWeatherMapKey}`)
    .then(response =>
      Promise.resolve(response.data)
    ).catch(error =>
      Promise.reject(error.response.data.message)
    )
}