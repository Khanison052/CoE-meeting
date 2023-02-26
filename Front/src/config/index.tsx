import { useState, useEffect } from 'react';
import axios from 'axios';


export const ax = axios.create({
  baseURL: 'http://localhost:1337/api',
  withCredentials: true,
})
async function authenticateUser(username: string, password: string)
 {
  const response = await ax.get(`/meetings/?populate=*`, {
    });
    console.log(response.data)
    console.log(response.data.data[0])
    return response.data; // Returns the authentication token
}

export default authenticateUser