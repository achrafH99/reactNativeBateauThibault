import axios from 'axios';

const BASE_URL = "https://us-central1-projetbateau-d52df.cloudfunctions.net/";

export default function getRessources(ressourceName) {
    const url = `${BASE_URL}/${ressourceName}`;
    return axios.get(url);
}