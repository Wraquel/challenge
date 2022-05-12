import axios from 'axios';

export default async function TaskService(){
    return axios.get('http://localhost:3008/api/tasks/').then((response) => response.data).catch(console.error('error'))
}