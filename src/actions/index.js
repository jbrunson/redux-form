import axios from 'axios';
const API_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  // From redux-thunk....returns a function (direct access to Dispatch function)
  return function(dispatch) {
    // Submit email/password to the server
    axios.post(`${API_URL}/signin`, { email, password })
    
    // If request is good...
    // - Update state to indicate user is authenticated
    // - Save the JWT token
    // - redirect to the route '/feature'

    // If request is bad...
    // - Show an error to the user
  }

}