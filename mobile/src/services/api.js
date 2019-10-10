import axios from 'axios';

//Utilizar o Host vindo do EXPO
const api = axios.create({
  baseURL: "http://192.168.0.10:3333"
});

export default api;