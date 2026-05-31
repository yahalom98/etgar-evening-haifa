import React from 'react'
import { useState, useEffect } from 'react'


export default function App() {
  let [apiData, setApiData] = useState([]);


  async function loadData() {
    let server = await fetch('https://fakestoreapi.com/products');
    let data = await server.json();
    setApiData(data);
  }
  return (
    <div>

    </div>
  )
}
