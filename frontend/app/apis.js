import axios from 'axios';
const baseUrl = "http://localhost:8000/api/"

export function getContacts() {
    return axios.get(`${baseUrl}contacts`)
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching contacts:', error);
        return [];
      });
  }
  
  