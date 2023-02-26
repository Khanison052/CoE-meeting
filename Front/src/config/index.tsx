import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/articles')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

}
