const axios = require('axios');

export async function getStateService() {
  try {
    const url = "https://viacep.com.br/ws/30350040/json/"

    const response = await axios.get(url)
    console.log(response);
    console.log(response.uf);
    return response.uf
  } catch (error) {
    // throw new Error('erro na requisição http');
    console.log('erro na requisição http');
  }
};
