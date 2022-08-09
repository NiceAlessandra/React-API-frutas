import React from 'react';
import axios from 'axios';
import App from './App';

const api = axios.create ({
    baseURL: 'https://www.fruityvice.com/api/fruit/all'
});

export default App;


