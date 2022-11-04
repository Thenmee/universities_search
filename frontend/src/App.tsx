import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

type ServerData = any[];

async function getUniversities(name: any,order: any): Promise<any[]> {
  try {
  const url = `http://localhost:4000/university?name=${name}&order=${order}`;
  const response = await axios.get<ServerData>(url);
  return response.data;
  } catch (err) {
    return [];
  }
}

function App() {
  const [universities, setUniversities] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<any>(false);
  const [name, setName] = useState<any>('');
  const [order, setOrder] = useState<any>('asc');
  const loadUniversities=(name:any,order:any)=>{
    (async () => {
      setIsLoading(true)
    const data = await getUniversities(name,order);
    setUniversities(data);
    setIsLoading(false)
  })();
}
  useEffect(() => {
    loadUniversities("",order)
  },[]);
  const universitySearch = (event: any) => {
    let name = event.target.value;
    if (event.key === "Enter") {
      loadUniversities(name, order);
      
    }
  };
  const setUniversitiesOrder = (order: any) => {
      setOrder(order);
      loadUniversities(name, order);

  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <p>Search for Universities</p>
          <div>
            <button disabled={isLoading} onClick={()=>setUniversitiesOrder( order === 'desc'? 'asc' : 'desc')}>
             {order==='desc'?'order asc' : 'order desc'}   
            </button>
            
            <input
            disabled={isLoading}
            onChange={(event)=> setName(event.target.value)}
              onKeyPress={universitySearch}
              placeholder="search..."
              name="name"
              type="search"
            />
          </div>
        </div>
      </header>
    {!isLoading && <section >
        {universities && universities.length < 1 && (
          <div>no data available</div>
        )}
        {universities && universities.length > 0 && (
          <table>
            <thead>
             <tr>
              <th>country</th>
              <th>university name</th>
              </tr>
            </thead>
            <tbody>
              {universities.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.country}</td>
                    <td>{item.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </section>}
      {isLoading && <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}
    </div>
  );
}

export default App;
