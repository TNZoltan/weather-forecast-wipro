import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { fetchForecastByCity } from 'functions/requests'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('fetches weather forecast list successfully', async () => {
  const response = await fetchForecastByCity()
  expect(response.list)
});
