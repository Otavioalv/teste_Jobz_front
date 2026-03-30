import axios from 'axios';

export const api = axios.create({
    baseURL: "https://onda_finance.api.testefake:8000",
    timeout: 20000,
    headers: {"Content-Type": "application/json"}
});


// utilizar (api.interceptors.response.use();) para filtrar 
// erros e torna-los agradaveis visualmente para os usuarios

