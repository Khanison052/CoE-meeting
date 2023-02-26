import { useState, useEffect } from 'react';
import axios from 'axios';
const user = 'abc';
const password = '123456';

export const ax = axios.create({
  baseURL: 'http://localhost:1337'
})

function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    axios.post('http://localhost:1337/auth/local', {
  identifier: user,
  password: password
})
.then(response => {
  const token = response.data.jwt;
  console.log(token)
})
.catch(error => {
  console.log(error);
});
  }, []);

}
export default App