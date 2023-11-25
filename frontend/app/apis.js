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
  
  export function addContact(formData) {
    return axios.post(`${baseUrl}add`, formData, {
      headers: {
        'Content-Type': 'application/json',
      }, 
    })
      .then(response => response.data)
      .catch(error => {
        console.error('Error adding contact:', error);
        throw new Error('Failed to add contact');
      });
  }

  export function deleteContact(id){
    return axios.delete(`${baseUrl}contacts/${id}`)
      .then((response) => {
        if (response.status === 204) {
          return true;
        } else {
          return false;
        }
      })
      .catch((error) => {
        console.error('Error deleting contact:', error);
        return false;
      });
  };
  
  export function updateContact(formData, id) {
    return axios.put(`${baseUrl}contacts/${id}`, formData)
      .then(response => response.data)
      .catch(error => {
        console.error('Error updating contact:', error);
        throw new Error('Failed to update contact');
      });
  }
  
